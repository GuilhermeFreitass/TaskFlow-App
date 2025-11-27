import { TaskService } from "@/services/task.service";
import { Task } from "@/types/task";
import { useCallback, useEffect, useState } from "react";

export function useTaskController() {

    const [tasks, setTasks] = useState<Task[]>([]);

    const [isLoading, setIsLoading] = useState(false)

    const loadTasks = useCallback(async () => {
        setIsLoading(true);

        try {
            const data = await TaskService.getAll()
            setTasks(data.sort((a, b) => a.id - b.id));
        } catch (error) {
            console.error("Erro ao buscar", error);
            alert("Erro ao carregar tarefas")
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        loadTasks();
    }, [loadTasks])

    const createTask = async (title: string, description: string = '') => {
        if (!title.trim()) return;

        try {
            const newTask = await TaskService.create({ title, description })
            setTasks((prev) => [...prev, newTask]);
        } catch (error) {
            console.error("Erro ao criar:", error);
            alert("Não foi possível criar a tarefa.");
        }
    }
    const toggleTask = async (id: number, currentStatus: boolean) => {
        try {
            setTasks((prev) =>
                prev.map(task =>
                    task.id === id ? { ...task, done: currentStatus } : task
                )
            )
            await TaskService.update(id, { done: !currentStatus })
        } catch (error) {
            console.error("Erro ao atualizar:", error);
            loadTasks();
        }
    }
    const updateTask = async (id: number, newTitle: string) => {
        try {
            setTasks((prev) =>
                prev.map(task => task.id === id ? { ...task, title: newTitle } : task)
            );
            await TaskService.update(id, { title: newTitle });
        } catch (error) {
            console.error("Erro ao editar:", error);
            loadTasks();
        }
    }
    const deleteTask = async (id: number) => {
        try {
            setTasks((prev) => prev.filter(task => task.id !== id));
            await TaskService.delete(id);
        } catch (error) {
            console.error("Erro ao deletar:", error);
            loadTasks();
        }
    };
    return {
        tasks,
        isLoading,
        createTask,
        toggleTask,
        updateTask,
        deleteTask
    };
}
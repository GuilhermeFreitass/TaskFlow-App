import { api } from "./api"
import { Task, CreateTaskDTO, UpdateTaskDTO } from "@/types/task"

export const TaskService = {
    getAll: async (): Promise<Task[]> => {
        const response = await api.get('/tasks');
        return response.data
    },

    create: async (data: CreateTaskDTO): Promise<Task> => {
        const response = await api.post('/tasks', data)
        return response.data
    },

    update: async (id: number, data: UpdateTaskDTO): Promise<Task> => {
        const response = await api.patch(`/tasks/${id}`, data)
        return response.data
    },

    delete: async (id: number): Promise<void> => {
        await api.delete(`/task/${id}`)
    }
}
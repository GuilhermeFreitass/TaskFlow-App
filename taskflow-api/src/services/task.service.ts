import { CreateTaskDTO } from "../dtos/create-task.dto";
import { updateTaskDTO } from "../dtos/update-task.dto";
import { TaskRepository } from "../repositories/task.repository";

export class TaskService {
    private repository = new TaskRepository();

    private async findTaskOrFail(id: number) {
        const task = await this.repository.findById(id);
        if (!task) {
            throw new Error("Tarefa não encontrada!");
        }
        return task;
    }

    async createTask(data: CreateTaskDTO) {
        if (!data.title) {
            throw new Error("O título da tarefa é obrigatório")
        }

        const createdTask = await this.repository.create(data)
        return createdTask
    }

    async updateTask(data: updateTaskDTO) {
        if (!data.id) {
            throw new Error("O ID da tarefa é obrigatório")
        }
        await this.findTaskOrFail(data.id)

        const updatedTask = await this.repository.update(data)
        return updatedTask
    }

    async getTasks() {
        const getTasks = await this.repository.findAll()
        return getTasks
    }

    async getTaskById(id: number) {
        if (!id) {
            throw new Error("O ID da tarefa é obrigatório")
        }
        const getTasksById = await this.repository.findById(id)
        return getTasksById
    }

    async deleteTask(id: number) {
        if (!id) {
            throw new Error("O ID da tarefa é obrigatório")
        }
        await this.findTaskOrFail(id)

        const deletedTask = await this.repository.delete(id)
        return deletedTask

    }
}
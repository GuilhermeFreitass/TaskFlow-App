
import { Request, Response } from 'express';
import { TaskService } from '../services/task.service';

export class TaskController {
    private service = new TaskService()

    async createTask(req: Request, res: Response) {
        try {
            const { title, description } = req.body

            const createdTask = await this.service.createTask({
                title,
                description,
            });
            return res.status(201).json(createdTask);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async updateTask(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { title, description, done } = req.body

            const updatedTask = await this.service.updateTask({
                id: Number(id),
                title,
                description,
                done,
            })
            return res.status(200).json(updatedTask);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
    async getAllTasks(req: Request, res: Response) {
        try {
            const getTasks = await this.service.getTasks()
            return res.status(200).json(getTasks);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
    async getTask(req: Request, res: Response) {
        try {
            const { id } = req.params

            const getTask = await this.service.getTaskById(Number(id))
            return res.status(200).json(getTask);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
    async deleteTask(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const deletedTask = await this.service.deleteTask(Number(id))
            return res.status(200).json(deletedTask);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
}

import { Request, Response } from 'express';
import { TaskService } from '../services/task.service';

export class TaskController {
    private service = new TaskService()

    async createTask(req: Request, res: Response) {
        try {
            const { title, description, priority, dueDate, isImportant, projectId } = req.body

            const createdTask = await this.service.createTask({
                title,
                description,
                priority,
                dueDate,
                isImportant,
                projectId,
            });
            return res.status(201).json(createdTask);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async updateTask(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { title, description, done, priority, dueDate, isImportant, projectId, status } = req.body

            const updatedTask = await this.service.updateTask({
                id: Number(id),
                title,
                description,
                done,
                priority,
                dueDate,
                isImportant,
                projectId,
                status,
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

    async getTasksByProject(req: Request, res: Response) {
        try {
            const { projectId } = req.params
            const tasks = await this.service.getTasksByProject(Number(projectId))
            return res.status(200).json(tasks);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async getTasksByPriority(req: Request, res: Response) {
        try {
            const { priority } = req.params
            if (!["Alta", "Media", "Normal"].includes(priority)) {
                return res.status(400).json({ error: "Prioridade inválida" })
            }
            const tasks = await this.service.getTasksByPriority(priority as "Alta" | "Media" | "Normal")
            return res.status(200).json(tasks);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async getTasksToday(req: Request, res: Response) {
        try {
            const tasks = await this.service.getTasksToday()
            return res.status(200).json(tasks);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async getTasksPlanned(req: Request, res: Response) {
        try {
            const tasks = await this.service.getTasksPlanned()
            return res.status(200).json(tasks);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async getTasksImportant(req: Request, res: Response) {
        try {
            const tasks = await this.service.getTasksImportant()
            return res.status(200).json(tasks);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async searchTasks(req: Request, res: Response) {
        try {
            const { q } = req.query
            if (!q || typeof q !== 'string') {
                return res.status(400).json({ error: "Parâmetro de busca 'q' é obrigatório" })
            }
            const tasks = await this.service.searchTasks(q)
            return res.status(200).json(tasks);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async filterTasks(req: Request, res: Response) {
        try {
            const { priority, projectId, isImportant, status, startDate, endDate, search } = req.query

            const filters: any = {};
            if (priority) filters.priority = priority;
            if (projectId) filters.projectId = Number(projectId);
            if (isImportant !== undefined) filters.isImportant = isImportant === 'true';
            if (status) filters.status = status;
            if (startDate) filters.startDate = startDate as string;
            if (endDate) filters.endDate = endDate as string;
            if (search) filters.search = search as string;

            const tasks = await this.service.getTasksWithFilters(filters)
            return res.status(200).json(tasks);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
}
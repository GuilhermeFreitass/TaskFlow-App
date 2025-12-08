import { Request, Response } from 'express';
import { ProjectService } from '../services/project.service';

export class ProjectController {
    private service = new ProjectService()

    async createProject(req: Request, res: Response) {
        try {
            const { name, color } = req.body

            const createdProject = await this.service.createProject({
                name,
                color,
            });
            return res.status(201).json(createdProject);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async updateProject(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { name, color } = req.body

            const updatedProject = await this.service.updateProject(Number(id), {
                name,
                color,
            })
            return res.status(200).json(updatedProject);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async getAllProjects(req: Request, res: Response) {
        try {
            const projects = await this.service.getProjects()
            return res.status(200).json(projects);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async getProject(req: Request, res: Response) {
        try {
            const { id } = req.params

            const project = await this.service.getProjectById(Number(id))
            return res.status(200).json(project);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async deleteProject(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const deletedProject = await this.service.deleteProject(Number(id))
            return res.status(200).json(deletedProject);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
}



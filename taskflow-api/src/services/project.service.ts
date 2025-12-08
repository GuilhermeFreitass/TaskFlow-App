import { CreateProjectDTO } from "../dtos/create-project.dto";
import { UpdateProjectDTO } from "../dtos/update-project.dto";
import { ProjectRepository } from "../repositories/project.repository";

export class ProjectService {
    private repository = new ProjectRepository();

    private async findProjectOrFail(id: number) {
        const project = await this.repository.findById(id);
        if (!project) {
            throw new Error("Projeto não encontrado!");
        }
        return project;
    }

    async createProject(data: CreateProjectDTO) {
        if (!data.name || data.name.trim().length === 0) {
            throw new Error("O nome do projeto é obrigatório")
        }

        if (!data.color || !/^#[0-9A-F]{6}$/i.test(data.color)) {
            throw new Error("A cor deve ser um valor hexadecimal válido (ex: #FF5733)")
        }

        const existingProject = await this.repository.findAll();
        const nameExists = existingProject.some(p => p.name.toLowerCase() === data.name.toLowerCase());

        if (nameExists) {
            throw new Error("Já existe um projeto com este nome")
        }

        const createdProject = await this.repository.create(data)
        return createdProject
    }

    async getProjects() {
        return this.repository.findAll()
    }

    async getProjectById(id: number) {
        if (!id) {
            throw new Error("O ID do projeto é obrigatório")
        }
        const project = await this.repository.findById(id)
        return project
    }

    async updateProject(id: number, data: UpdateProjectDTO) {
        if (!id) {
            throw new Error("O ID do projeto é obrigatório")
        }
        await this.findProjectOrFail(id)

        if (data.name !== undefined && data.name.trim().length === 0) {
            throw new Error("O nome do projeto não pode ser vazio")
        }

        if (data.color !== undefined && !/^#[0-9A-F]{6}$/i.test(data.color)) {
            throw new Error("A cor deve ser um valor hexadecimal válido (ex: #FF5733)")
        }

        if (data.name !== undefined) {
            const existingProject = await this.repository.findAll();
            const nameExists = existingProject.some(p => p.id !== id && p.name.toLowerCase() === data.name!.toLowerCase());

            if (nameExists) {
                throw new Error("Já existe um projeto com este nome")
            }
        }

        const updatedProject = await this.repository.update(id, data)
        return updatedProject
    }

    async deleteProject(id: number) {
        if (!id) {
            throw new Error("O ID do projeto é obrigatório")
        }
        await this.findProjectOrFail(id)

        const deletedProject = await this.repository.delete(id)
        return deletedProject
    }
}


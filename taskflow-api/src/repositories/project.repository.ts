import { PrismaClient } from "@prisma/client";
import { CreateProjectDTO } from "../dtos/create-project.dto";
import { UpdateProjectDTO } from "../dtos/update-project.dto";

const prisma = new PrismaClient()

export class ProjectRepository {
    async create(data: CreateProjectDTO) {
        return prisma.project.create({
            data: {
                name: data.name,
                color: data.color,
            },
        });
    }

    async findAll() {
        return prisma.project.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
    }

    async findById(id: number) {
        return prisma.project.findUnique({
            where: {
                id,
            },
            include: {
                tasks: true,
            }
        })
    }

    async update(id: number, data: UpdateProjectDTO) {
        const updateData: any = {};
        
        if (data.name !== undefined) updateData.name = data.name;
        if (data.color !== undefined) updateData.color = data.color;

        return prisma.project.update({
            where: {
                id,
            },
            data: updateData,
        })
    }

    async delete(id: number) {
        return prisma.project.delete({
            where: {
                id,
            },
        })
    }
}



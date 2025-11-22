import { PrismaClient } from "@prisma/client";
import { CreateTaskDTO } from "../dtos/create-task.dto";
import { updateTaskDTO } from "../dtos/update-task.dto";

const prisma = new PrismaClient()

export class TaskRepository {

    async create(data: CreateTaskDTO) {
        return prisma.task.create({
            data: {
                title: data.title,
                description: data.description,
            },
        });
    }

    async findAll() {
        return prisma.task.findMany()
    }

    async findById(id: number) {
        return prisma.task.findUnique({
            where: {
                id,
            }
        })
    }
    async update(data: updateTaskDTO) {
        return prisma.task.update({
            where: {
                id: data.id,
            },
            data: {
                title: data.title,
                description: data.description,
                done: data.done,
            },
        })
    }

    async delete(id: number) {
        return prisma.task.delete({
            where: {
                id,
            },
        })
    }
}
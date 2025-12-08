import { PrismaClient } from "@prisma/client";
import { CreateTaskDTO } from "../dtos/create-task.dto";
import { updateTaskDTO } from "../dtos/update-task.dto";
import { FilterTasksDTO } from "../dtos/filter-tasks.dto";

const prisma = new PrismaClient()

export class TaskRepository {

    async create(data: CreateTaskDTO) {
        return prisma.task.create({
            data: {
                title: data.title,
                description: data.description,
                priority: data.priority,
                dueDate: data.dueDate ? new Date(data.dueDate) : null,
                isImportant: data.isImportant ?? false,
                projectId: data.projectId,
            },
        });
    }

    async findAll() {
        return prisma.task.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
    }

    async findById(id: number) {
        return prisma.task.findUnique({
            where: {
                id,
            }
        })
    }

    async update(data: updateTaskDTO) {
        const updateData: any = {};

        if (data.title !== undefined) updateData.title = data.title;
        if (data.description !== undefined) updateData.description = data.description;
        if (data.done !== undefined) {
            updateData.done = data.done;
            // Sync status with done: if done is true, status should be Concluido
            if (data.done === true && data.status === undefined) {
                updateData.status = "Concluido";
            } else if (data.done === false && data.status === undefined) {
                // If done is false and status is Concluido, reset to Pendente
                // But only if status wasn't explicitly provided
                const currentTask = await this.findById(data.id);
                if (currentTask?.status === "Concluido") {
                    updateData.status = "Pendente";
                }
            }
        }
        if (data.priority !== undefined) updateData.priority = data.priority;
        if (data.dueDate !== undefined) updateData.dueDate = data.dueDate ? new Date(data.dueDate) : null;
        if (data.isImportant !== undefined) updateData.isImportant = data.isImportant;
        if (data.projectId !== undefined) updateData.projectId = data.projectId;
        if (data.status !== undefined) updateData.status = data.status;

        return prisma.task.update({
            where: {
                id: data.id,
            },
            data: updateData,
        })
    }

    async delete(id: number) {
        return prisma.task.delete({
            where: {
                id,
            },
        })
    }

    async findByProject(projectId: number) {
        return prisma.task.findMany({
            where: {
                projectId,
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    }

    async findByPriority(priority: "Alta" | "Media" | "Normal") {
        return prisma.task.findMany({
            where: {
                priority,
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    }

    async findByDateRange(startDate: Date, endDate: Date) {
        return prisma.task.findMany({
            where: {
                dueDate: {
                    gte: startDate,
                    lte: endDate,
                },
            },
            orderBy: {
                dueDate: 'asc'
            }
        })
    }

    async findToday() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        return prisma.task.findMany({
            where: {
                dueDate: {
                    gte: today,
                    lt: tomorrow,
                },
            },
            orderBy: {
                dueDate: 'asc'
            }
        })
    }

    async findImportant() {
        return prisma.task.findMany({
            where: {
                isImportant: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    }

    async search(query: string) {
        return prisma.task.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },
                    {
                        description: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },
                ],
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    }

    async findWithFilters(filters: FilterTasksDTO) {
        const where: any = {};

        if (filters.priority) {
            where.priority = filters.priority;
        }

        if (filters.projectId) {
            where.projectId = filters.projectId;
        }

        if (filters.isImportant !== undefined) {
            where.isImportant = filters.isImportant;
        }

        if (filters.status) {
            where.status = filters.status;
        }

        if (filters.startDate || filters.endDate) {
            where.dueDate = {};
            if (filters.startDate) {
                where.dueDate.gte = new Date(filters.startDate);
            }
            if (filters.endDate) {
                where.dueDate.lte = new Date(filters.endDate);
            }
        }

        if (filters.search) {
            where.OR = [
                {
                    title: {
                        contains: filters.search,
                        mode: 'insensitive',
                    },
                },
                {
                    description: {
                        contains: filters.search,
                        mode: 'insensitive',
                    },
                },
            ];
        }

        return prisma.task.findMany({
            where,
            orderBy: {
                createdAt: 'desc'
            }
        })
    }
}
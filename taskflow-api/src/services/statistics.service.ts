import { TaskRepository } from "../repositories/task.repository";

export class StatisticsService {
    private taskRepository = new TaskRepository();

    async getTotalTasks() {
        const tasks = await this.taskRepository.findAll();
        return tasks.length;
    }

    async getPendingTasks() {
        const tasks = await this.taskRepository.findAll();
        return tasks.filter(task => !task.done).length;
    }

    async getCompletedTasks() {
        const tasks = await this.taskRepository.findAll();
        return tasks.filter(task => task.done).length;
    }

    async getHighPriorityTasks() {
        const tasks = await this.taskRepository.findAll();
        return tasks.filter(task => task.priority === "Alta").length;
    }

    async getAllStatistics() {
        const tasks = await this.taskRepository.findAll();
        
        return {
            total: tasks.length,
            pending: tasks.filter(task => !task.done).length,
            completed: tasks.filter(task => task.done).length,
            highPriority: tasks.filter(task => task.priority === "Alta").length,
        };
    }

    async getProductivityMetrics() {
        const tasks = await this.taskRepository.findAll();
        const total = tasks.length;
        const completed = tasks.filter(task => task.done).length;
        
        if (total === 0) {
            return {
                completionRate: 0,
                total,
                completed,
            };
        }

        return {
            completionRate: Math.round((completed / total) * 100),
            total,
            completed,
        };
    }
}



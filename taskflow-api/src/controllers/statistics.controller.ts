import { Request, Response } from 'express';
import { StatisticsService } from '../services/statistics.service';

export class StatisticsController {
    private service = new StatisticsService()

    async getAllStatistics(req: Request, res: Response) {
        try {
            const statistics = await this.service.getAllStatistics()
            return res.status(200).json(statistics);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async getTotals(req: Request, res: Response) {
        try {
            const total = await this.service.getTotalTasks()
            return res.status(200).json({ total });
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async getPending(req: Request, res: Response) {
        try {
            const pending = await this.service.getPendingTasks()
            return res.status(200).json({ pending });
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async getHighPriority(req: Request, res: Response) {
        try {
            const highPriority = await this.service.getHighPriorityTasks()
            return res.status(200).json({ highPriority });
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }

    async getProductivityMetrics(req: Request, res: Response) {
        try {
            const metrics = await this.service.getProductivityMetrics()
            return res.status(200).json(metrics);
        } catch (error: any) {
            return res.status(400).json({ error: error.message })
        }
    }
}



import { Router } from "express";
import { StatisticsController } from "../controllers/statistics.controller";

const router = Router()
const controller = new StatisticsController();

router.get("/statistics", controller.getAllStatistics.bind(controller));
router.get("/statistics/totals", controller.getTotals.bind(controller));
router.get("/statistics/pending", controller.getPending.bind(controller));
router.get("/statistics/high-priority", controller.getHighPriority.bind(controller));
router.get("/statistics/productivity", controller.getProductivityMetrics.bind(controller));

export default router;



import { Router } from "express";
import { TaskController } from "../controllers/task.controller";

const router = Router()
const controller = new TaskController();

router.post("/tasks", controller.createTask.bind(controller));
router.get("/tasks", controller.getAllTasks.bind(controller));
router.get("/task/:id", controller.getTask.bind(controller));
router.patch("/task/:id", controller.updateTask.bind(controller));
router.delete("/task/:id", controller.deleteTask.bind(controller));

export default router;
import { Router } from "express";
import { TaskController } from "../controllers/task.controller";

const router = Router()
const controller = new TaskController();

router.post("/tasks", controller.createTask.bind(controller));
router.get("/tasks", controller.getAllTasks.bind(controller));
router.get("/tasks/:id", controller.getTask.bind(controller));
router.patch("/tasks/:id", controller.updateTask.bind(controller));
router.delete("/tasks/:id", controller.deleteTask.bind(controller));

export default router;
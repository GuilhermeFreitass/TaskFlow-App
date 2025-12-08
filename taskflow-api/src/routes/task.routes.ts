import { Router } from "express";
import { TaskController } from "../controllers/task.controller";

const router = Router()
const controller = new TaskController();

router.post("/tasks", controller.createTask.bind(controller));
router.get("/tasks", controller.getAllTasks.bind(controller));
router.get("/tasks/today", controller.getTasksToday.bind(controller));
router.get("/tasks/planned", controller.getTasksPlanned.bind(controller));
router.get("/tasks/important", controller.getTasksImportant.bind(controller));
router.get("/tasks/search", controller.searchTasks.bind(controller));
router.get("/tasks/filter", controller.filterTasks.bind(controller));
router.get("/tasks/project/:projectId", controller.getTasksByProject.bind(controller));
router.get("/tasks/priority/:priority", controller.getTasksByPriority.bind(controller));
router.get("/tasks/:id", controller.getTask.bind(controller));
router.patch("/tasks/:id", controller.updateTask.bind(controller));
router.delete("/tasks/:id", controller.deleteTask.bind(controller));

export default router;
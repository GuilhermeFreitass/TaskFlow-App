import { Router } from "express";
import { ProjectController } from "../controllers/project.controller";

const router = Router()
const controller = new ProjectController();

router.post("/projects", controller.createProject.bind(controller));
router.get("/projects", controller.getAllProjects.bind(controller));
router.get("/projects/:id", controller.getProject.bind(controller));
router.patch("/projects/:id", controller.updateProject.bind(controller));
router.delete("/projects/:id", controller.deleteProject.bind(controller));

export default router;



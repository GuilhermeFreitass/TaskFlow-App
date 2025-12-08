import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.routes";
import projectRouter from "./routes/project.routes";
import statisticsRouter from "./routes/statistics.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use(taskRouter);
app.use(projectRouter);
app.use(statisticsRouter);

export default app;

import express from "express";
import { seedClients, seedProjects, seedTasks } from "../controllers/seed";

const router = express.Router();

router.get("/clients", seedClients);
router.get("/projects", seedProjects);
router.get("/tasks", seedTasks);
// router.patch("/:id", updateProject);
// router.delete("/:id", deleteProject);

export default router;

import express from "express";
import {
  removeAllData,
  seedClients,
  seedProjects,
  seedTasks,
} from "../controllers/seed";

const router = express.Router();

router.get("/clients", seedClients);
router.get("/projects", seedProjects);
router.get("/tasks", seedTasks);
router.get("/remove", removeAllData);
// router.patch("/:id", updateProject);
// router.delete("/:id", deleteProject);

export default router;

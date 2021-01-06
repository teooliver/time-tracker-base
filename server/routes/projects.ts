import express from "express";
import { getProjects, createProject } from "../controllers/projects";

const router = express.Router();

router.get("/", getProjects);
router.post("/", createProject);
// router.patch("/:id", updateProject);
// router.delete("/:id", deleteProject);

export default router;

import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTasksGroupedByDate,
} from "../controllers/tasks";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/group", getTasksGroupedByDate);

export default router;

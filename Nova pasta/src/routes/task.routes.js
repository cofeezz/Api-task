import { Router } from "express";
import { getTask, lsitTasks } from "../controllers/tasks.controller.js";

const router = Router()

router.get("/", lsitTasks)
router.get("/:id", getTask)
router.post("/", createTask)
router.put("/", updateTasks)

export default router
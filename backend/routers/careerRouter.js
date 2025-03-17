import express from "express";
import verifyAdminToken from '../middlewares/adminAuthMiddleware.js';
import { getJob, addJob, updateJob, deleteJob } from "../controllers/careerController.js";

const router = express.Router();

router.get("/", getJob);   // Fetch all jobs

// This middleware will be applied to all the route below this middleware
router.use(verifyAdminToken);

router.post("/", addJob);  // Add a new job
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router;
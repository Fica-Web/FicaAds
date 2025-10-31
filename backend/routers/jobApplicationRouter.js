import express from 'express';
const router = express.Router();
import { createJobApplication } from '../controllers/jobApplicationController';

router.post('/create', createJobApplication);

export default router;
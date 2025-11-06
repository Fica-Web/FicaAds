import express from 'express';
const router = express.Router();
import upload from '../middlewares/multer.js';
import { createJobApplication } from '../controllers/jobApplicationController.js';

router.post('/create', upload.single('resume'), createJobApplication);

export default router;
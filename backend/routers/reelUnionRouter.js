import express from 'express';
const router = express.Router();
import { CreatorOnboardingForm } from '../controllers/reelUnionController.js';

// Route for Reel Union onboarding
router.post('/create', CreatorOnboardingForm);


export default router;
import express from 'express';
const router = express.Router();
import verifyAdminToken from '../middlewares/adminAuthMiddleware.js';
import upload from '../middlewares/multer.js';
import {
    getTeam,
    createTeamMember,
    updateTeamMember,
    deleteTeamMember,
} from '../controllers/teamController.js';

router.get('/', getTeam);

// This middleware will be applied to all the route below this middleware
router.use(verifyAdminToken);

router.post('/', upload.single('image'), createTeamMember);
router.put('/:id', upload.single('image'), updateTeamMember);
router.delete('/:id', deleteTeamMember);

export default router;
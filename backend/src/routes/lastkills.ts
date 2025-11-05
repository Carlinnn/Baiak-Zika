import { Router } from 'express';
import { getLastKills } from '../controllers/lastKillsController';

const router = Router();
router.get('/', getLastKills);

export default router;

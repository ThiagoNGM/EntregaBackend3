import { Router } from 'express';
import mocksController from '../controllers/mocks.controller.js';

const router = Router();

router.get('/mockingusers', mocksController.getMocksUsers);
router.post('/generateData', mocksController.generateMockData);

export default router;

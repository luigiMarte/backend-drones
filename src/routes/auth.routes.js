import { Router } from 'express';
const router = Router();

import * as userController from '../controllers/auth.controller';

router.post('/sign_up', userController.signUp);
router.post('/sign_in', userController.signIn);

export default router;

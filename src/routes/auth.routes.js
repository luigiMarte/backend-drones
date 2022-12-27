import { Router } from 'express';
const router = Router();

import * as userController from '../controllers/auth.controller';

router.post('/sign_up', userController.signUp);
router.post('/sign_in', userController.signIn);

import { verifyToken } from '../middlewares';

// router.post('/', verifyToken, userController.createUser);

router.get('/', userController.getUsers);

router.get('/:userId', userController.getUserById);

router.put('/:userId', verifyToken, userController.updateUserById);

// get pilots
router.get('/pilots', userController.getPilots);
router.get('/city/:city', userController.getPilotsByCity);

// router.delete('/:userId', verifyToken, userInfoController.deleteUser);

export default router;

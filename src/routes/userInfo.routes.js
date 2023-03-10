import { Router } from "express";
const router = Router();

import * as userInfoController from "../controllers/userInfo.controller.js";
// otra forma:
//import {getUsers, getUserById} from '../controllers/users.controller';
import { verifyToken } from "../middlewares/index.js";

router.post("/", verifyToken, userInfoController.createUser);

router.get("/", userInfoController.getUsers);

router.get("/:userId", userInfoController.getUserById);

router.put("/:userId", verifyToken, userInfoController.updateUserById);

router.delete("/:userId", verifyToken, userInfoController.deleteUser);

export default router;

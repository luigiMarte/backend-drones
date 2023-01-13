import { Router } from "express";
const router = Router();

import * as userDataController from "../controllers/userData.controller.js";
// otra forma:
//import {getUsers, getUserById} from '../controllers/users.controller';
import { verifyToken } from "../middlewares/index.js";

router.post("/", verifyToken, userDataController.createUser);

router.get("/", userDataController.getUsers);

router.get("/:userId", userDataController.getUserById);

router.put("/:userId", verifyToken, userDataController.updateUserById);

router.delete("/:userId", verifyToken, userDataController.deleteUser);

export default router;

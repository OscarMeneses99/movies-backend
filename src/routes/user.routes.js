import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const router = Router();

//endpoints
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.post("/", UserController.createUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;

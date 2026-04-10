import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { getUsers, getUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', authorize, getUser);
userRouter.put('/:id', (req, res) => res.send({title: 'UPDATE user'}));
userRouter.delete('/:id', (req, res) => res.send({title: 'DELETE a user'}));

export default userRouter;
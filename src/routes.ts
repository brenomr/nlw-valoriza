import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserControler } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";


const router = Router();

const createUserControler = new CreateUserControler();
const createTagController = new CreateTagController();

router.post("/users", createUserControler.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };
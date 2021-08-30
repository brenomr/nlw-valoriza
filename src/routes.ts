import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentsController } from "./controllers/CreateComplimentsController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserControler } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";


const router = Router();

const createUserControler = new CreateUserControler();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentsController = new CreateComplimentsController();

router.post("/users", createUserControler.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentsController.handle);

export { router };
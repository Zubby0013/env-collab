import { Router } from "express";
import { createUser, viewAllUser, viewOneUser } from "../controller/userController";


const router:Router = Router();

router.route("/create-user").post(createUser);
router.route("/view-one-user").get(viewOneUser);
router.route("/view-all-user").get(viewAllUser);

export default router;
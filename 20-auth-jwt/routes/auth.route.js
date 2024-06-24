import Router from "express";
import { signup } from "../controllers/auth.controller.js";

//create Router instance.
const router = Router();

// define rest methods using the router object. specify the path for the route and req handler as the argument.
router.post("/signup", signup);
router.post("/signin", (req, res) => res.send("signin"));

export default router;

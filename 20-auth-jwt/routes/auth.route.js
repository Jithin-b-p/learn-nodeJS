import Router from "express";

//create Router instance.
const router = Router();

// define rest methods using the router object. specify the path for the route and req handler as the argument.
const signup = router.post("/signup", (req, res) => res.send("signup"));
const signin = router.post("/signin", (req, res) => res.send("signin"));

export default router;

const { Router } = require("express");
const router = Router();
const authorize = require("../auth/auth");

const {
  getUsers,
  createUser,
  updateUser,
  updateField,
  deleteUser,
} = require("../controller/users");

router.get("/", authorize, getUsers);

router.post("/", createUser);

router.put("/:id", updateUser);

router.patch("/:id", updateField);

router.delete("/:id", deleteUser);

module.exports = router;

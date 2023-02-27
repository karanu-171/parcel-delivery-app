const express = require('express')
const {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const userRoutes = express.Router()

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/:id", getUser);
userRoutes.get("/", getAllUsers);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);

module.exports = userRoutes
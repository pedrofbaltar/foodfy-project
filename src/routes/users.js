const express = require("express");
const routes = express.Router();

const SessionController = require("../app/controllers/SessionController");
const UserController = require("../app/controllers/UserController");

const SessionValidator = require("../app/validators/session");
const UserValidator = require("../app/validators/user");

const {
  isLoggedRedirectToUsers,
  onlyUsers,
} = require("../app/middlewares/session");

routes
  .get("/login", isLoggedRedirectToUsers, SessionController.loginForm)
  .get("/forgot-password", SessionController.forgotPasswordForm)
  .get("/change-password", SessionController.changePasswordForm)
  .post("/login", SessionValidator.login, SessionController.login)
  .post("/logout", SessionController.logout)
  .post(
    "/forgot-password",
    SessionValidator.forgot,
    SessionController.forgotPassword
  )
  .post(
    "/change-password",
    SessionValidator.change,
    SessionController.changePassword
  )

  .get("/create", onlyUsers, UserValidator.create, UserController.registerForm)
  .get("/", onlyUsers, UserController.list)
  .get(
    "/:id/edit",
    onlyUsers,
    UserValidator.edit,
    UserValidator.show,
    UserController.edit
  )
  .post(
    "/create",
    onlyUsers,
    UserValidator.create,
    UserValidator.post,
    UserController.post
  )
  .put(
    "/",
    onlyUsers,
    UserValidator.put,
    UserValidator.update,
    UserController.put
  )
  .delete("/", onlyUsers, UserValidator.deleteValidator, UserController.delete);

module.exports = routes;

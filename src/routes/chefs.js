const express = require("express");
const routes = express.Router();
const multer = require("../app/middlewares/multer");

const ChefController = require("../app/controllers/ChefController");
const { onlyUsers } = require("../app/middlewares/session");
const ChefValidator = require("../app/validators/chef");

routes
  .get("/", onlyUsers, ChefController.list)
  .get("/create", onlyUsers, ChefValidator.onlyAdmin, ChefController.create)
  .get("/:id", onlyUsers, ChefController.show)
  .get("/:id/edit", onlyUsers, ChefValidator.onlyAdmin, ChefController.edit)
  .post(
    "/",
    onlyUsers,
    multer.array("photos", 1),
    ChefValidator.onlyAdmin,
    ChefController.post
  )
  .put(
    "/",
    onlyUsers,
    multer.array("photos", 1),
    ChefValidator.onlyAdmin,
    ChefController.put
  )
  .delete("/", onlyUsers, ChefValidator.onlyAdmin, ChefController.delete);

module.exports = routes;

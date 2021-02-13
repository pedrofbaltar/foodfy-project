const express = require("express");
const routes = express.Router();

const PublicSectionController = require("../app/controllers/PublicSectionController");

routes
  .get("/", PublicSectionController.home)
  .get("/about", PublicSectionController.about)
  .get("/recipes", PublicSectionController.recipes)
  .get("/recipes/:id", PublicSectionController.specificRecipe)
  .get("/chefs", PublicSectionController.chefs);

module.exports = routes;

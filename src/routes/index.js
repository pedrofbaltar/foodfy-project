const express = require("express");
const routes = express.Router();

const publicSection = require("./publicSection");
const privateSection = require("./privateSection");

routes
  .use("/", publicSection)
  .use("/admin", privateSection)

  .get("/admin", (req, res) => {
    return res.redirect("/admin/users/login");
  });

module.exports = routes;

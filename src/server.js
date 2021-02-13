const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const methodOverride = require("method-override");
const session = require("./config/session");

const server = express();

nunjucks.configure("src/app/views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server
  .use(session)
  .use(express.static("public"))
  .use(express.urlencoded({ extended: true }))
  .use(methodOverride("_method"))
  .use(routes)
  .get("*", (req, res) => {
    res.status(404).render("not-found/not-found");
  })
  .set("view engine", "njk")
  .listen(7000, () => {
    console.log("Server is running!");
  });

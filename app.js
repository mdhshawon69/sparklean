const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// Set the view engine to hbs
app.set("view engine", "hbs");

// Specify the views directory
app.set("views", path.join(__dirname, "views"));

hbs.registerPartials(path.join(__dirname, "views/partials"));

// Configure express-handlebars
app.engine("hbs", hbs.__express);

// Middleware to set the default layout
app.use((req, res, next) => {
  res.locals.layout = "layouts/main"; // default layout name
  next();
});

app.get("/", (req, res) => {
  res.render("pages/index", { title: "home page" });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { title: "about page" });
});

app.get("/service", (req, res) => {
  res.render("pages/service", { title: "service page" });
});

app.get("/project", (req, res) => {
  res.render("pages/project", { title: "project page" });
});

app.get("/blog", (req, res) => {
    res.render("pages/blog", { title: "blog page" });
});

app.get("/contact", (req, res) => {
    res.render("pages/contact", { title: "contact page" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

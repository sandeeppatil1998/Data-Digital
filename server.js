const express = require("express");
const connectDB = require("./db");
const app = express();
const cookieParser = require("cookie-parser");
const Page = require("./model/Pages");
const bodyParser = require("body-parser");

const PORT = 4200;

app.set("view engine", "ejs");

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", require("./Auth/route"));
app.get("/", (req, res) => res.render("login"));
app.get("/dashboard", (req, res) => res.render("dashboard"));
// app.get("/admin", (req, res) => res.render("admin"));
app.get("/pages", function (req, res) {
  Page.find({}, function (err, pages) {
    if (err) res.json(err);
    else res.render("pages", { templates: pages, error: false });
  });
});


app.post("/Fields", (req, res) => {
  const { fields } = req.body;
  console.log(fields);
  if (!fields) {
    return res.status(400).send({ status: "failed" });
  }
  res.status(200).send({ status: "recived" });
});

app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});

const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
);

process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});


const express = require("express");
const router = express.Router();
const connectDB = require("../db");

const { register, login, pagedata,getData,fields } = require("./auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/page").post(pagedata);
router.route("/Fields").post(fields);
router.route("/data").get(getData);


module.exports = router;

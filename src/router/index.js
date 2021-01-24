const express = require("express");
const router = express.Router();

const config = require("../config/config");

router.get('/', async (req, res, next) => {
  res.render("index", { API_KEY: config.app.api_key});
});

router.post('/', async (req, res, next) => {
  console.log(req);
  res.status(200).send();
})

module.exports = router;
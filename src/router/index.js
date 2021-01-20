const express = require("express");
const router = express.Router();

router.get('/', async (req, res, next) => {
  res.render("index");
});

router.post('/', async (req, res, next) => {
  console.log(req);
  res.status(200).send();
})

module.exports = router;
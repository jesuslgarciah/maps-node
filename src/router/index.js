const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render("index", { title: "Titulo de prueba", paragraph: "Esto es un parrafo"});
});

module.exports = router;
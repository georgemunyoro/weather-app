var express = require("express");
var router = new express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Kunaya" });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");

router.route("/").get(postController.getAllposts);

module.exports = router;

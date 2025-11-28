const express = require("express");
const router = express.Router();
const commentControllers = require("../controllers/commentControllers");

router.post("/add", commentControllers.addComment);
router.get("/:movieId", commentControllers.getCommentsByMovie);
router.delete("/delete/:id", commentControllers.deleteComment);

module.exports = router;

const express = require("express");
const router = express.Router();
const ratingControllers = require("../controllers/ratingControllers");

router.post("/add", ratingControllers.addRating);
router.get("/:movieId", ratingControllers.getRatingsByMovie);
router.get("/avg/:movieId", ratingControllers.getMovieAverageStars);

module.exports = router;

const route = require('express').Router();
const reviewcontro = require('../controllers/reviewcontrollers');


route.post("/", reviewcontro.addReview);

route.delete("/:id", reviewcontro.deleteReview);
route.get("/movie/:movieId", reviewcontro.getReviewsByMovie);




module.exports = route;
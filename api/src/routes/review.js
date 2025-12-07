const route = require('express').Router();
const reviewcontro = require('../controllers/reviewcontrollers');

const authMiddleware = require('../middleware/middlewareControllers');

route.post("/", reviewcontro.addReview);

route.delete("/:id", authMiddleware.verifyTokenAdmin, reviewcontro.deleteReview);
route.get("/movie/:movieId", reviewcontro.getReviewsByMovie);




module.exports = route;
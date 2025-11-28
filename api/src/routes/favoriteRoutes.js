const express = require("express");
const router = express.Router();
const favoriteControllers = require("../controllers/favoriteControllers");

router.post("/add", favoriteControllers.addFavorite);
router.get("/:userId", favoriteControllers.getFavorites);
router.post("/remove", favoriteControllers.removeFavorite);

module.exports = router;

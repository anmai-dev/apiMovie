const route = require('express').Router();
const videoControllers = require("../controllers/videoControllers")
const middlewareVerify = require('../middleware/middlewareControllers')




// getAllVideo
route.get("/", videoControllers.getAllVideo)
// deleteVideo
route.get("/find/:id", videoControllers.getVideoById)
route.get("/search/:title", videoControllers.searchVideoByTitle)


module.exports = route
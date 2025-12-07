const route = require('express').Router();
const videoControllers = require("../../controllers/videoControllers")
const middlewareVerify = require('../../middleware/middlewareControllers')


// create Video
route.post("/", middlewareVerify.verifyTokenAndAdmin, (req, res, next) => {
    console.log("req.body:", req.body);
    console.log("req.files:", req.files);
    next();
}, videoControllers.createVideo);
// getAllVideo
route.get("/", middlewareVerify.verifyTokenAndAdmin, videoControllers.getAllVideonew)
// deleteVideo
route.delete("/:id", middlewareVerify.verifyTokenAdmin, videoControllers.deleteVideo)



module.exports = route
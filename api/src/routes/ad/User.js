const route = require('express').Router();
const userControllers = require('../../controllers/userControllers');
const middlewareVerify = require("../../middleware/middlewareControllers");


//get all users
route.get("/getall", middlewareVerify.verifyTokenAndAdmin, userControllers.getAllusers);
route.get("/:id", middlewareVerify.verifyTokenAndAdmin, userControllers.getUserById)
// delete user
route.delete('/delete/:id', middlewareVerify.verifyTokenAndAdmin, userControllers.deleteUser);
// update user
route.put("/:id", middlewareVerify.verifyTokenAndAdmin, userControllers.updateUser)


module.exports = route;
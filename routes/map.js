const express = require("express")
const router = express.Router();
const { logIn, Registration, verifyToken } = require("../authentication")
const { createPoints, getCoodinate } = require("../services/map")

router.post("/registration", Registration);
router.post("/login", logIn);
router.post("/create", verifyToken, createPoints);// verifyToken makes shure that the user is logged in before performing the operation
router.get("/", verifyToken, getCoodinate);// verifyToken makes shure that the user is logged in before performing the operation

module.exports = router;
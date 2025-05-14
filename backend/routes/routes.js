const express = require("express")
const auth = require("../api/auth")
const list = require("../api/list")


const router = express.Router()

router.use("/api/v1", auth)
router.use("/api/v1", list)


module.exports = router
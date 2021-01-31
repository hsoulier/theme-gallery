const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Home")
})
router.get("/theme/:id", (req, res) => {
    res.send(`Theme with the id ${req.params.id}`)
})
router.get("/gallery/:id", (req, res) => {
    res.send(`Gallery with the id ${req.params.id}`)
})

router.all("*", (req, res) => {
    res.status(404).send("404")
})

module.exports = router

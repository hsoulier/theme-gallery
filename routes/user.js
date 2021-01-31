const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("User")
})
router.post("/connect", (req, res) => {
  res.send("User connect post ", req.body)
})
router.get("/:id", (req, res) => {
  res.send("dashboard of user ", req.params.id)
})
router.post("/add-gallery", (req, res) => {
  res.send("Add a gallery")
})
router.post("/disconnect", (req, res) => {
  res.send("User deconnected")
})

module.exports = router

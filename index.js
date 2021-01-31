require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const handlebars = require("express-handlebars")
const mongoose = require("mongoose")
const defaultRoutes = require("./routes/index")
const userRoutes = require("./routes/user")

const app = express()
const port = process.env.PORT || 3000
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(helmet())
app.use(morgan("tiny"))
app.engine(
    "hbs",
    handlebars({
        layoutsDir: `./views/layout`,
        extname: "hbs",
        defaultLayout: "index",
        partialsDir: "./views/partial",
    })
)
app.set("view engine", "hbs")
app.use(express.static("public"))
app.use("/user", userRoutes)
app.use("/", defaultRoutes)

app.listen(port, () =>
    console.log(`App listenning on http://localhost:${port}`)
)

const express = require("express")
const LinkShortnerRouter = require("./routes/linkShortnerRoute")
const { ConnectMongoDb } = require("./connection")
const PORT= 8000



ConnectMongoDb()

const app = express()

app.use(express.urlencoded({extended: false}))
app.use("/api/route",LinkShortnerRouter)

app.listen(PORT,()=>console.log("Server started"))
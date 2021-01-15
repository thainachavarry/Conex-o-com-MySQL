const express = require("express")
const mongoose = require("mongoose")
const database = require('./database/index.js')
const Actor = require('./app/models/Actor')
const app = express()

mongoose.connect("mongodb+srv://thatadoida:fisicas2@cluster0.1qlty.mongodb.net/aletop?retryWrites=true&w=majority", {
    useNewUrlParser: true
}), 

app.use(express.json())
async function a (req, res) {
    const actors = await Actor.findAll()
    res.json(actors)

}
app.get("/", a)
app.listen(3333, () => {
    console.log("Rodando")
})


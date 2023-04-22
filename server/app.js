import express from 'express'
import {getData} from './database.js'

const app = express()
app.use(express.json())

// app.post("/events", async (req, res) => {
//     const {title, description } = req.body
//     const events = await getData()
// })

app.get("/", async (req, res) => {
    const events = await getData()
    res.header("Access-Control-Allow-Origin","http://localhost:3000");
    res.send(events)
    // res.send({"title":"Basketball Game","description":"Watch David take down the Gilstads"})
})

app.listen(3001, () => {
    console.log("server is running on port 3001")
})
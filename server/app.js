import express from 'express'
import {getData} from './database.js'

const app = express()
app.use(express.json())

app.get("/", async (req, res) => {
    const events = await getData()
    //responding to get request by allowing localhost:3000 to access API, and also sending events variable over
    res.header("Access-Control-Allow-Origin","http://localhost:3000");
    res.send(events)
})

app.listen(3001, () => {
    console.log("server is running on port 3001")
})
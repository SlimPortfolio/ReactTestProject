import express from 'express'
import {getData} from './database.js'
import bodyParser from 'body-parser'

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.get("/data", async (req, res) => {
    const events = await getData()
    //responding to get request by allowing localhost:3000 to access API, and also sending events variable over
    res.header("Access-Control-Allow-Origin","http://localhost:3000");
    res.send(events)
})

app.post('/', async (req, res) => {
    let data = req.body;
    res.header("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Methods","GET,POST");
    res.send("data received: " + JSON.stringify(data));
})

app.listen(3001, () => {
    console.log("server is running on port 3001")
})
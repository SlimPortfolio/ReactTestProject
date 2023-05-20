import express from 'express'
import {executeLogin, getData, postData} from './database.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())

app.get("/data", async (req, res) => {
    const events = await getData()
    //responding to get request by allowing localhost:3000 to access API, and also sending events variable over
    res.header("Access-Control-Allow-Origin","http://localhost:3000");
    res.send(events)
})

app.post('/post', async (req, res) => {
    res.header("Access-Control-Allow-Origin","http://localhost:3000");
    const title = JSON.stringify(req.body.event_title)
    const description = JSON.stringify(req.body.event_description)
    const newEvent = await postData(title, description)
    res.send(newEvent)
})

app.post('/executeLogin', async (req, res) => {
    //creates a post API that will take in the request from the front end, so that database function can be run
    const username = JSON.stringify(req.body.username);
    const password = JSON.stringify(req.body.password);
    const logIn = await executeLogin(username,password);
    res.send(logIn)
    console.log(logIn);
})

app.listen(3001, () => {
    console.log("server is running on port 3001")
})
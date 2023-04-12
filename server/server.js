const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const app = express();
const port = 3001; //TODO

// Add the bodyParser middelware to the express application
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
})

client.connect()

app.get('/events', (req, res) => {
  client.query(`SELECT * FROM events`, (err, result) => {
    const newResult = { rowCount: result.rowCount, 
                  data: result.rows
                }
    if(!err) {
      res.send(newResult)
    }
  })
  client.end;
})

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
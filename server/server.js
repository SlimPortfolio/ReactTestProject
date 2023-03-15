const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001; //TODO

// Add the bodyParser middelware to the express application
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
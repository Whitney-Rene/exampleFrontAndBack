// server/index.js

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

//Set the port that you want the server to run on
const PORT = process.env.PORT || 5000;

//creates an endpoint for the route /myname
app.get('/myname', (req, res) => {
    const name = {name: "Whitney-Rene"};
  res.json(name);
});

//creates an endpoint for the route /api
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from ExpressJS' });
  });

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
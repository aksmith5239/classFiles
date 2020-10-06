// Dependencies
// ===========================================================
const express = require('express');

const app = express();
const PORT = 3001;

// Data
// ===========================================================
const yoda = {
  name: 'Yoda',
  role: 'Jedi Master',
  age: 900,
  midichlorians: 2000
};

const darthmaul = {
  name: 'Darth Maul',
  role: 'Sith Lord',
  age: 200,
  midichlorians: 1200
};

// Create a data object for the character, Obi Wan Kenobi
// Enter any values you like for the properties following the same format as the Yoda and Darth Maul character above
//
// YOUR CODE HERE
const obiwankenobi = {
  name: 'Obi Wan Kenobi',
  role: 'Jedi Master',
  age: 100,
  midichlorians: 1500
};

const lukeSkywalker  = {
  name: 'Luke Skywalker',
  role: 'Jedi Knight',
  age: 55,
  midichlorians: 1700
};

// Routes
// ===========================================================
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

app.get('/yoda', (req, res) => {
  res.json(yoda);
});

app.get('/darthmaul', (req, res) => {
  res.send(darthmaul);
});

app.get('/lukeSkywalker', (req, res) => {
  res.json(lukeSkywalker);
});


// Create a new Express route that leads users to the new Obi Wan Kenobi data
// Follow the same format as the Yoda and Darth Maul routes
//
app.get('/obiwankenobi', (req, res) => {
  res.json(obiwankenobi);
});
//

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});

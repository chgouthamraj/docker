const express = require('express');
const app = express();
const port = 3000;

// A simple route
app.get('/', (req, res) => {
  res.send('Hello, Express!!!!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

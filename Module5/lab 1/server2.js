const express = require('express');
const app = express();
const port = 3001; // Change port number if needed

app.get('/', (req, res) => {
  res.send('Hello from Server 2!');
});

app.listen(port, () => {
  console.log(`Server 2 listening at http://localhost:${port}`);
});

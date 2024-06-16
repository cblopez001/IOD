const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello Everyone from port ' + port);
});

app.listen(port, () => {
  console.log(`Server 2 listening on port ${port}`);
});



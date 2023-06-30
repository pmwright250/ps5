const express = require('express');
const routes = require('./routes');

const app = express();

// Set up middleware and configurations

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const express = require('express');
const app = express();

app.use(express.static('example'));

app.listen(3220, () => {
  console.log('Server running at http://localhost:3220');
});






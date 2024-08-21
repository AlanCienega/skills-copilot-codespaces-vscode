// Create web server
// Create a web server that listens on port 3000. It should respond to a GET request to the path /comments with a JSON response, which is an array of comments (strings). The comments array should have at least 3 comments in it. Use the express module.

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.json(['comment 1', 'comment 2', 'comment 3']);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
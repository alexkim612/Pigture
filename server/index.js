const express = require('express');
const path = require('path');
const app = express();
const parser = require('body-parser');
const PORT = 2000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log('Listening on port: ' + PORT));
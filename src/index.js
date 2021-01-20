const express = require('express');
const path = require('path');

const config = require('./config/config');
const routes = require('./router/index');

// app
const app = express();

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// routes
app.use(routes);

//public
app.use(express.static(path.join(__dirname, 'public')));


app.listen(config.app.port, () => {
  console.log(`Server listening on http://localhost:${config.app.port}`);
})
let bodyParser = require('body-parser');
let express = require('express');

let getCitiesController = require('./controllers/cities/getCities');

let app = express();

// This makes it easier to handle posted JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(
  3004,
  () => console.log('turtle-cities listening on port 3004!')
);

app.set('etag', false);

app.get('/api/cities', getCitiesController);

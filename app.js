let bodyParser = require('body-parser');
let express = require('express');

let cityRoutes = require('./routes/cityRoutes');

let app = express();

// This makes it easier to handle posted JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(
  3004,
  () => console.log('turtle-cities listening on port 3004!')
);

app.set('etag', false);

cityRoutes(app);

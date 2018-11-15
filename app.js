let bodyParser = require('body-parser');
let express = require('express');

let config = require('./config');

let cityRoutes = require('./routes/cityRoutes');
let sessionRoutes = require('./routes/sessionRoutes');

let app = express();

// This makes it easier to handle posted JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(
  3004,
  () => console.log('turtle-api listening on port 3004!')
);

require('./session')(app, config);

app.set('etag', false);

cityRoutes(app);
sessionRoutes(app);

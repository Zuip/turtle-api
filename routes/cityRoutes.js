let getCitiesController = require('../controllers/cities/getCities');
let getCountriesController = require('../controllers/cities/getCountries');

module.exports = function(app) {
  app.get('/api/cities', getCitiesController);
  app.get('/api/countries', getCountriesController);
};

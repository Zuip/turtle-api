let getCitiesController = require('../controllers/cities/getCities');
let getCityController = require('../controllers/cities/getCity');
let getCountriesController = require('../controllers/cities/getCountries');
let getCountryController = require('../controllers/cities/getCountry');
let getCountryCitiesController = require('../controllers/cities/getCountryCities');

module.exports = function(app) {
  app.get('/api/cities', getCitiesController);
  app.get('/api/countries', getCountriesController);
  app.get('/api/countries/:countryUrlName', getCountryController);
  app.get('/api/countries/:countryUrlName/cities', getCountryCitiesController);
  app.get('/api/countries/:countryUrlName/cities/:cityUrlName', getCityController);
};

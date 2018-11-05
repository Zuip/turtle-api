let citiesByCountriesToCities = require('../../services/cities/citiesByCountriesToCities');
let cityDataFormatter = require('../../services/dataFormatters/cities/city');
let getCities = require('../../integrations/cities/getCities');
let passErrorForward = require('../../turtlelib/routing/passErrorForward');

module.exports = function(req, res) {
  return getCities.withLanguage(
    req.query.language
  ).then(
    countries => citiesByCountriesToCities(countries)
  ).then(
    cities => cities.map(cityDataFormatter)
  ).then(
    cities => res.json(cities)
  ).catch(
    error => passErrorForward(res, error)
  );
};

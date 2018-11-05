let citiesByCountriesToCities = require('../../services/cities/citiesByCountriesToCities');
let getCities = require('../../integrations/cities/getCities');
let passErrorForward = require('../../turtlelib/routing/passErrorForward');

module.exports = function(req, res) {
  return getCities.withLanguage(
    req.query.language
  ).then(
    countries => citiesByCountriesToCities(countries)
  ).then(
    cities => cities.map(city => (
      {
        country: city.country,
        latitude: city.latitude,
        longitude: city.longitude,
        name: city.name,
        urlName: city.urlName
      }
    ))
  ).then(
    cities => res.json(cities)
  ).catch(
    error => passErrorForward(res, error)
  );
};

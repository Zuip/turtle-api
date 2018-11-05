let cityDataFormatter = require('../../services/dataFormatters/cities/city');
let getCity = require('../../integrations/cities/getCity');
let getCityTranslations = require('../../integrations/cities/getCityTranslations');
let passErrorForward = require('../../turtlelib/routing/passErrorForward');

module.exports = function(req, res) {
  return getCity.withCountryUrlNameAndCityUrlNameAndLanguage(
    req.params.countryUrlName,
    req.params.cityUrlName,
    req.query.language
  ).then(
    city => getCityTranslations.withId(city.id)
  ).then(
    cities => cities.map(cityDataFormatter)
  ).then(
    cities => res.json(cities)
  ).catch(
    error => passErrorForward(res, error)
  );
};

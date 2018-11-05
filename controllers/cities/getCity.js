let cityDataFormatter = require('../../services/dataFormatters/cities/city');
let getCity = require('../../integrations/cities/getCity');
let passErrorForward = require('../../turtlelib/routing/passErrorForward');

module.exports = function(req, res) {
  return getCity.withCountryUrlNameAndCityUrlNameAndLanguage(
    req.params.countryUrlName,
    req.params.cityUrlName,
    req.query.language
  ).then(
    city => cityDataFormatter(city)
  ).then(
    city => res.json(city)
  ).catch(
    error => passErrorForward(res, error)
  );
};

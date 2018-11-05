let cityDataFormatter = require('../../services/dataFormatters/cities/city');
let getCities = require('../../integrations/cities/getCities');
let getCountry = require('../../integrations/cities/getCountry');
let passErrorForward = require('../../turtlelib/routing/passErrorForward');

module.exports = function(req, res) {
  return getCountry.withUrlNameAndLanguage(
    req.params.countryUrlName,
    req.query.language
  ).then(
    country => getCities.withCountryIdAndLanguage(
      country.id,
      req.query.language
    )
  ).then(
    cities => cities.map(cityDataFormatter)
  ).then(
    cities => res.json(cities)
  ).catch(
    error => passErrorForward(res, error)
  );
};

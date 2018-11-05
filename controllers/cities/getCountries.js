let countryDataFormatter = require('../../services/dataFormatters/cities/country');
let getCountries = require('../../integrations/cities/getCountries');
let passErrorForward = require('../../turtlelib/routing/passErrorForward');

module.exports = function(req, res) {
  return getCountries.withLanguage(
    req.query.language
  ).then(
    countries => countries.map(countryDataFormatter)
  ).then(
    countries => res.json(countries)
  ).catch(
    error => passErrorForward(res, error)
  );
};

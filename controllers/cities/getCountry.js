let countryDataFormatter = require('../../services/dataFormatters/cities/country');
let getCountry = require('../../integrations/cities/getCountry');
let passErrorForward = require('../../turtlelib/routing/passErrorForward');

module.exports = function(req, res) {
  return getCountry.withUrlNameAndLanguage(
    req.params.countryUrlName,
    req.query.language
  ).then(
    country => countryDataFormatter(country)
  ).then(
    country => res.json(country)
  ).catch(
    error => passErrorForward(res, error)
  );
};

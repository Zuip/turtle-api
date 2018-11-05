let countryDataFormatter = require('../../services/dataFormatters/cities/country');
let getCountryTranslations = require('../../integrations/cities/getCountryTranslations');
let getCountry = require('../../integrations/cities/getCountry');
let passErrorForward = require('../../turtlelib/routing/passErrorForward');

module.exports = function(req, res) {
  return getCountry.withUrlNameAndLanguage(
    req.params.countryUrlName,
    req.query.language
  ).then(
    country => getCountryTranslations.withId(
      country.id
    )
  ).then(
    countryTranslations => countryTranslations.map(
      countryDataFormatter
    )
  ).then(
    countries => res.json(countries)
  ).catch(
    error => passErrorForward(res, error)
  );
};

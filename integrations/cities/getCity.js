let GetCreator = require('../../turtlelib/apis/crudCreators/GetCreator');
let config = require('../../config');
let get = GetCreator(config.integrations.cities.url);

module.exports = {
  withCountryUrlNameAndCityUrlNameAndLanguage(countryUrlName, cityUrlName, language) {
    return get(
      '/api'
      + '/countries/' + encodeURIComponent(countryUrlName)
      + '/cities/' + encodeURIComponent(cityUrlName)
      + '?language=' + encodeURIComponent(language)
    );
  }
};

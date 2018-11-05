let GetCreator = require('../../turtlelib/apis/crudCreators/GetCreator');
let config = require('../../config');
let get = GetCreator(config.integrations.cities.url);

module.exports = {
  withCountryIdAndLanguage(countryId, language) {
    return get(
      '/api/countries/' + countryId + '/cities'
      + '?language=' + language
    );
  },
  withLanguage(language) {
    return get(
      '/api/cities?language=' + language
    );
  }
};

let GetCreator = require('../../turtlelib/apis/crudCreators/GetCreator');
let config = require('../../config');
let get = GetCreator(config.integrations.cities.url);

module.exports = {
  withCountryIdAndLanguage(countryId, language) {
    return get(
      '/api'
      + '/countries/' + encodeURIComponent(countryId)
      + '/cities'
      + '?language=' + encodeURIComponent(language)
    );
  },
  withLanguage(language) {
    return get(
      '/api'
      + '/cities'
      + '?language=' + encodeURIComponent(language)
    );
  }
};

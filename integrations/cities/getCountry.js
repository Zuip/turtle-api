let GetCreator = require('../../turtlelib/apis/crudCreators/GetCreator');
let config = require('../../config');
let get = GetCreator(config.integrations.cities.url);

module.exports = {
  withUrlNameAndLanguage(countryUrlName, language) {
    return get(
      '/api'
      + '/countries/' + encodeURIComponent(countryUrlName)
      + '?language=' + encodeURIComponent(language)
    );
  }
};

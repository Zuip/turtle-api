let GetCreator = require('../../turtlelib/apis/crudCreators/GetCreator');
let config = require('../../config');
let get = GetCreator(config.integrations.cities.url);

module.exports = {
  withLanguage(language) {
    return get(
      '/api'
      + '/countries'
      + '?language=' + encodeURIComponent(language)
    );
  }
};

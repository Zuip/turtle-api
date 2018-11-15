let GetCreator = require('../../turtlelib/apis/crudCreators/GetCreator');
let config = require('../../config');
let get = GetCreator(config.integrations.cities.url);

module.exports = {
  withId(cityId) {
    return get(
      '/api'
      + '/cities/' + encodeURIComponent(cityId)
      + '/translations'
    );
  }
};

let GetCreator = require('../../turtlelib/apis/crudCreators/GetCreator');
let config = require('../../config');
let get = GetCreator(config.integrations.cities.url);

module.exports = {
  withId(countryId) {
    return get(
      '/api/countries/' + countryId + '/translations'
    );
  }
};

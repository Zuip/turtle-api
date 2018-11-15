let GetCreator = require('../../turtlelib/apis/crudCreators/GetCreator');
let config = require('../../config');
let get = GetCreator(config.integrations.users.url);

module.exports = {
  withId(id) {
    return get(
      '/api'
      + '/users/' + id
    );
  },
  withUsernameAndPassword(username, password) {
    return get(
      '/api'
      + '/users'
      + '?username=' + encodeURIComponent(username)
      + '&password=' + encodeURIComponent(password)
    );
  }
};

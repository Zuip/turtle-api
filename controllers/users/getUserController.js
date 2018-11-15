let getUser = require('../../integrations/users/getUser');
let passErrorForward = require('../../turtlelib/routing/passErrorForward');

module.exports = function(req, res) {
  return getUser.withId(
    req.session.user.id
  ).then(
    user => res.json({
      id: user.id,
      name: user.name
    })
  ).catch(
    error => passErrorForward(res, error)
  );
};

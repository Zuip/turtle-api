let getUser = require('../../integrations/users/getUser');
let passErrorForward = require('../../turtlelib/routing/passErrorForward');

module.exports = function(req, res) {

  if (!validUserId(req)) {
    return res.json({
      id: null
    });
  }

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

function validUserId(req) {
  return typeof req.session !== 'undefined'
    && typeof req.session.user !== 'undefined'
    && req.session.user.id;
}

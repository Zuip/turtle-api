let getUser = require('../../integrations/users/getUser');
let passErrorForward = require('../../turtlelib/routing/passErrorForward');

module.exports = function(req, res) {
  return getUser.withUsernameAndPassword(
    req.body.username,
    req.body.password
  ).then(user => {

    req.session.user = {
      id: user.id
    };

    return res.json({
      id: user.id,
      name: user.name
    });

  }).catch(
    error => passErrorForward(res, error)
  );
};

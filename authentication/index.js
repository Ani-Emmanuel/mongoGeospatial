const auth = require("./auth");

module.exports = {
  logIn: auth.login,
  verifyToken: auth.verifyToken,
  Registration: auth.localRegistration,
};

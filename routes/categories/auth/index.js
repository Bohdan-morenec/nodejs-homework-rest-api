const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const reDispatchVerifyToken = require("../auth/reDispatchVerifyToken");

module.exports = {
  register,
  login,
  logout,
  reDispatchVerifyToken,
};

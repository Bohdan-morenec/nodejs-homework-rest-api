const { Conflict } = require("http-errors");

const { user } = require("../../../models");

const register = async (req, res) => {
  const { email, password } = req.body;
  const checkUniqueness = user.findOne({ email });

  if (!checkUniqueness) {
    throw new Conflict("Already register");
  }
  const addUser = await user.create(req.body);

  res.json({
    meesage: addUser,
  });
};

module.exports = register;

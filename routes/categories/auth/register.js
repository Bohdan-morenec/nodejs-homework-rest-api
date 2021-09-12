const { Conflict } = require("http-errors");

const { User } = require("../../../models");

const register = async (req, res) => {
  const { email, password } = req.body;

  const checkUniqueness = User.findOne({ email });

  if (checkUniqueness) {
    throw new Conflict("Already register");
  }

  const newUser = new User({ email });
  newUser.sethashPassword(password);
  await newUser.save();

  res.json({
    status: "success",
    code: 200,
    result: {
      data: newUser,
    },
  });
};

module.exports = register;

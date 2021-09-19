const fs = require("fs/promises");
const path = require("path");

const { Conflict } = require("http-errors");

const { User } = require("../../../models");

const register = async (req, res) => {
  const { email, password } = req.body;

  const checkUniqueness = await User.findOne({ email });

  if (checkUniqueness) {
    throw new Conflict("Already register");
  }

  const newUser = new User({ email });

  createAwatarFile(newUser._id);

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

const userDir = path.join(__dirname, "../../../public/avatars");

const createAwatarFile = async (id) => {
  const ditPath = path.join(userDir, id.toString());
  await fs.mkdir(ditPath);
};

module.exports = register;

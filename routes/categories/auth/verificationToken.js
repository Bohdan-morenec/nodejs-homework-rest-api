const { BadRequest } = require("http-errors");

const { User } = require("../../../models");

const verificationToken = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw new BadRequest();
  }

  await User.findByIdAndUpdate(user.id, {
    verificationToken: null,
    verify: true,
  });

  res.status(200).json({
    Status: 200,
    ResponseBody: {
      message: "Verification successful",
    },
  });
};

module.exports = verificationToken;

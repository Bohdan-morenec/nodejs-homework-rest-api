const { NotFound } = require("http-errors");

const { User } = require("../../../models");

const patch = async (req, res) => {
  const { id } = req.user;
  const { subscription } = req.body;

  const allSubscription = ["starter", "pro", "business"];

  const verifySubscription = allSubscription.includes(subscription);

  if (!verifySubscription) {
    throw new NotFound();
  }

  const patchSubscription = await User.findByIdAndUpdate(
    id,
    { subscription },
    { new: true }
  );

  if (!patchSubscription) {
    throw new NotFound();
  }

  res.status(200).json({
    status: "success",
    code: 200,
    result: {
      data: patchSubscription,
    },
  });
};

module.exports = patch;

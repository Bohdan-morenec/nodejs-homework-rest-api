const { contact } = require("../../../models");

const getAll = async (req, res, next) => {
  try {
    const contacts = await contact.find();

    res.status(200).json({
      status: "success",
      code: 200,
      result: {
        data: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;

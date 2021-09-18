const { contact } = require("../../../models");

const getAll = async (_, res) => {
  const contacts = await contact.find();

  res.status(200).json({
    status: "success",
    code: 200,
    result: {
      data: contacts,
    },
  });
};

module.exports = getAll;

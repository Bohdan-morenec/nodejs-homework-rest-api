const { contact } = require("../../../models");

const add = async (req, res) => {
  const addContact = await contact.create(req.body);

  res.status(201).json({
    status: "success",
    code: "201",
    result: {
      data: addContact,
    },
  });
};

module.exports = add;

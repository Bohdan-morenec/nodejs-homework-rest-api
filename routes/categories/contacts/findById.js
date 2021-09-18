const { NotFound } = require("http-errors");

const { contact } = require("../../../models");

const findById = async (req, res) => {
  const { contactId } = req.params;

  const dataContact = await contact.findById(contactId);

  if (!dataContact) {
    throw new NotFound();
  }

  res.status(200).json({
    status: "success",
    code: 200,
    result: { data: dataContact },
  });
};

module.exports = findById;

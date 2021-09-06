const { NotFound } = require("http-errors");

const { contact } = require("../../../models");

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;

  const deleteContact = await contact.findByIdAndRemove(contactId);

  if (!deleteContact) {
    throw new NotFound();
  }

  res.status(200).json({
    message: "contact deleted",
    status: "success",
    code: 200,
    result: {
      data: deleteContact,
    },
  });
};

module.exports = deleteContact;

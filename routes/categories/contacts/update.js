const { NotFound } = require("http-errors");

const { contact } = require("../../../models");

const {
  contactsShema: { JoiPutContacts },
} = require("../../../validate");

const updateContact = async (req, res) => {
  const { error } = JoiPutContacts.validate(req.body);

  if (error) {
    throw new BadRequest("missing fields");
  }

  const { contactId } = req.params;

  const updateContact = await contact.findOneAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!updateContact) {
    throw new NotFound();
  }

  res.status(200).json({
    status: "success",
    code: "200",
    result: {
      data: updateContact,
    },
  });
};

module.exports = updateContact;

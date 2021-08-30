const { contact } = require("../../../models");

const {
  contactsShema: { JoiPutContacts },
} = require("../../../validate");

const updateContact = async (req, res, next) => {
  try {
    const { error } = JoiPutContacts.validate(req.body);

    if (error) {
      return res.status(400).json({
        result: { message: "missing fields" },
      });
    }

    const { contactId } = req.params;

    const updateContact = await contact.findOneAndUpdate(contactId, req.body);

    if (!updateContact) {
      return res.status(404).json({
        result: {
          message: "Not found",
        },
      });
    }

    res.status(200).json({
      status: "success",
      code: "200",
      result: {
        data: updateContact,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;

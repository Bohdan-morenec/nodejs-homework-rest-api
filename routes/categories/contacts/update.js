const data = require("../../../model/contactsData");
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
    const dataUpdated = req.body;

    const { name, email, phone } = dataUpdated;

    if (name || email || phone) {
      const updateContact = await data.updateContact(contactId, dataUpdated);

      if (!updateContact) {
        return res.status(404).json({
          result: {
            message: "Not found",
          },
        });
      }

      res.status(201).json({
        status: "success",
        code: "201",
        result: {
          data: updateContact,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;

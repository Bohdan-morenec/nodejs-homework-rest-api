const data = require("../../../model/contactsData");

const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const deleteContact = await data.removeContact(contactId);

    if (!deleteContact) {
      return res.status(404).json({
        result: {
          message: "Not found",
        },
      });
    }

    res.status(200).json({
      message: "contact deleted",
      status: "success",
      code: 200,
      result: {
        data: deleteContact,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContact;

const { contact } = require("../../../models");

const {
  contactsShema: { JoiPatchContacts },
} = require("../../../validate");

const patch = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const updatesElement = await contact.findOneAndUpdate(contactId, req.body, {
      new: true,
    });

    if (!updatesElement) {
      res.status(404).json({
        message: "Not found",
      });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      result: {
        data: updatesElement,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = patch;

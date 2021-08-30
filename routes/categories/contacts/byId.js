const { contact } = require("../../../models");

const byId = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const dataContact = await contact.findById(contactId);

    if (!dataContact) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      result: { data: dataContact },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = byId;

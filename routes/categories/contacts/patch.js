const { contact } = require("../../../models");

const patch = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    console.log(contactId);

    const updatesElement = await contact.findOneAndUpdate(contactId, req.body);

    console.log(updatesElement);
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

const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../categories");

const {
  contactsShema: { JoiPostContacts, JoiPatchContacts },
} = require("../../models/joiValidate");

const { validation } = require("../../middleware");
const { controllerWrapper } = require("../../middleware");
const { tokenVerification } = require("../../middleware");

router.get(
  "/",
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.getAll)
);

router.get(
  "/:contactId",
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.findById)
);

router.post(
  "/",
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.add)
);

router.delete(
  "/:contactId",
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.del)
);

router.put(
  "/:contactId",
  validation(JoiPostContacts),
  controllerWrapper(tokenVerification),
  //validation(JoiPostContacts)бесполезная функция
  controllerWrapper(ctrl.update)
);

router.patch(
  "/:contactId/favorite",
  controllerWrapper(tokenVerification),
  validation(JoiPatchContacts),
  controllerWrapper(ctrl.patch)
);

module.exports = router;

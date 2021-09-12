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
  controllerWrapper(ctrl.byId)
);

router.post(
  "/",
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.addContact)
);

router.delete(
  "/:contactId",
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.deleteContact)
);

router.put(
  "/:contactId",
  validation(JoiPostContacts),
  controllerWrapper(tokenVerification),
  //validation(JoiPostContacts)бесполезная функция
  controllerWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  controllerWrapper(tokenVerification),
  validation(JoiPatchContacts),
  controllerWrapper(ctrl.patch)
);

module.exports = router;

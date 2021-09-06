const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../categories");

const {
  contactsShema: { JoiPostContacts, JoiPatchContacts },
} = require("../../models/joiValidate");

const { validation } = require("../../middleware");
const { controllerWrapper } = require("../../middleware");

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:contactId", controllerWrapper(ctrl.byId));

router.post("/", controllerWrapper(ctrl.addContact));

router.delete("/:contactId", controllerWrapper(ctrl.deleteContact));

router.put(
  "/:contactId",
  validation(JoiPostContacts),
  //validation(JoiPostContacts)бесполезная функция
  controllerWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  validation(JoiPatchContacts),
  controllerWrapper(ctrl.patch)
);

module.exports = router;

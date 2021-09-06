const express = require("express");

const router = express.Router();

const { contacts: ctrl } = require("../categories");

const { validation } = require("../../middleware");
const { controllerWrapper } = require("../../middleware");
const {
  contactsShema: { JoiPostContacts, JoiPatchContacts },
} = require("../../validate");

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:contactId", controllerWrapper(ctrl.byId));

router.post("/", controllerWrapper(ctrl.addContact));

router.delete("/:contactId", controllerWrapper(ctrl.deleteContact));

router.put(
  "/:contactId",
  validation(JoiPostContacts),
  controllerWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  validation(JoiPatchContacts),
  controllerWrapper(ctrl.patch)
);

module.exports = router;

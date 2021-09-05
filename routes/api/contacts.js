const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../categories");

const { medivarValidation } = require("../../validate");
const {
  contactsShema: { JoiPostContacts },
} = require("../../validate");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.byId);

router.post("/", ctrl.addContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put(
  "/:contactId",
  medivarValidation(JoiPostContacts),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  medivarValidation(JoiPostContacts),
  ctrl.patch
);

module.exports = router;

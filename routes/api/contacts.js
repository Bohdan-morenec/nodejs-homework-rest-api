const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../categories");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.byId);

router.post("/", ctrl.addContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", ctrl.updateContact);

router.patch("/:contactId/favorite", ctrl.patch);

module.exports = router;

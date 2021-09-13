const express = require("express");

const router = express.Router();

const { user: ctrl } = require("../categories");

const { controllerWrapper } = require("../../middleware");
const { tokenVerification } = require("../../middleware");

router.get(
  "/current",
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.getToken)
);

module.exports = router;

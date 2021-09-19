const express = require("express");

const router = express.Router();

const { user: ctrl } = require("../categories");

const {
  controllerWrapper,
  tokenVerification,
  upload,
} = require("../../middleware");

router.get(
  "/current",
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.getToken)
);

router.patch(
  "/avatars",
  controllerWrapper(tokenVerification),
  upload.single("image"),
  controllerWrapper(ctrl.patchAvaters)
);

module.exports = router;

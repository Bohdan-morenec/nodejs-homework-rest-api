const express = require("express");

const router = express.Router();

const { controllerWrapper } = require("../../middleware");
const { validation } = require("../../middleware");
const { tokenVerification } = require("../../middleware");

const { auth: ctrl } = require("../../routes/categories");

const {
  userShema: { joiPostRegister },
} = require("../../models/joiValidate");

router.post(
  "/register",
  validation(joiPostRegister),
  controllerWrapper(ctrl.register)
);

router.post(
  "/login",
  validation(joiPostRegister),
  controllerWrapper(ctrl.login)
);

router.get(
  "/logout",
  controllerWrapper(tokenVerification),
  // validation(joiPostRegister),
  controllerWrapper(ctrl.logout)
);

module.exports = router;

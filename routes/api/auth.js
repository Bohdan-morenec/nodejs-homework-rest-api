const express = require("express");

const router = express.Router();

const {
  controllerWrapper,
  validation,
  tokenVerification,
} = require("../../middleware");

const { auth: ctrl } = require("../../routes/categories");

const {
  userShema: { signupSchema },
} = require("../../models/joiValidate");

router.post(
  "/register",
  validation(signupSchema),
  controllerWrapper(ctrl.register)
);

router.post("/login", validation(signupSchema), controllerWrapper(ctrl.login));

router.get(
  "/logout",
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.logout)
);

router.post("/verify", controllerWrapper(ctrl.reDispatchVerifyToken));

module.exports = router;

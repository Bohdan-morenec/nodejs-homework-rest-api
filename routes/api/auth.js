const express = require("express");

const router = express.Router();

const { controllerWrapper } = require("../../middleware");
const { validation } = require("../../middleware");

const { auth: ctrl } = require("../../routes/categories");

const {
  userShema: { joiPostRegister },
} = require("../../models/joiValidate");

router.post(
  "/register",
  validation(joiPostRegister),
  controllerWrapper(ctrl.register)
);

// router.post('/login', ctrl.login)

// router.get('/logout', ctrl.logout)

module.exports = router;

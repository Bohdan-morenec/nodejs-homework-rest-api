const bcrypt = require("bcryptjs");
const { v4 } = require("uuid");

const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default: "",
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.methods.sethashPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.verificationPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.setVeriFyToken = function () {
  this.verificationToken = v4();
};

const User = model("user", userSchema);

module.exports = User;

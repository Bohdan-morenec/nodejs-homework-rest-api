const { Schema, model, SchemaTypes } = require("mongoose");

const contactShema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      require: [true, "Set email for contact"],
    },
    phone: {
      type: String,
      require: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const contact = model("contact", contactShema);

module.exports = contact;

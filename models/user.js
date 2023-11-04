const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { mongooseError } = require("../helpers");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailPattern,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: { type: String },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", mongooseError);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailPattern).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailPattern).required(),
  password: Joi.string().min(6).required(),
});

const schemas = {
  registerSchema,
  loginSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};

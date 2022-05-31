const { Joi } = require("express-validation");

const credentialsRegisterSchema = {
  body: Joi.object({
    name: Joi.string()
      .max(20)
      .messages({ message: "A name is required" })
      .required(),
    username: Joi.string()
      .max(20)
      .messages({ message: "A username is required" })
      .required(),
    password: Joi.string()
      .max(20)
      .messages({ message: "A password is required" })
      .required(),
  }),
};

module.exports = { credentialsRegisterSchema };

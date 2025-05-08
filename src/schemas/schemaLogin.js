const joi = require("joi");

const schemaLogin = joi.object({
  email: joi.string().email().required().messages({
    "any.required": "Informe o email de login",
    "string.email": "O campo email precisa ser um email valido",
    "string.empty": "Informe o email de login válido",
  }),
  password: joi.string().required().messages({
    "any.required": "O campo senha é obrigatorio",
    "string.empty": "Informe a senha",
  }),
});

module.exports = schemaLogin;

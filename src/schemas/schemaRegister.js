const joi = require("joi");

const schemaRegister = joi.object({
  username: joi.string().min(3).max(50).required().messages({
    "any.required": "O nome de usuario é obrigatorio",
    "string.empty": "O nome de usuario não pode estar vazio",
    "string.min": "O nome de usuario deve ter pelo menos 3 caracteres",
    "string.max": "O nome de usuario deve ter no maximo 50 caracteres",
  }),

  email: joi.string().email().required().messages({
    "any.required": "O email é obrigatório",
    "string.empty": "Informe um email válido",
    "string.email": "Formato de email inválido",
  }),

  password: joi.string().min(6).max(30).required().messages({
    "any.required": "A senha é obrigatória",
    "string.empty": "A senha não pode estar vazia",
    "string.min": "A senha deve ter pelo menos 6 caracteres",
    "string.max": "A senha deve ter no máximo 30 caracteres",
  }),
});

module.exports = schemaRegister;

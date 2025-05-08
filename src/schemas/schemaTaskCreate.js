const joi = require("joi");

const schemaTaskCreate = joi.object({
  title: joi.string().min(3).max(100).required().messages({
    "any.required": "O título é obrigatório",
    "string.empty": "O título não pode estar vazio",
    "string.min": "O título deve ter pelo menos 3 caracteres",
    "string.max": "O título deve ter no máximo 100 caracteres",
  }),
  description: joi.string().max(500).allow("").messages({
    "string.max": "A descrição deve ter no máximo 500 caracteres",
  }),
  completed: joi.boolean().messages({
    "boolean.base": "O campo 'completed' deve ser verdadeiro ou falso",
  }),
});

module.exports = schemaTaskCreate;

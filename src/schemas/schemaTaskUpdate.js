const joi = require("joi");

const schemaTaskUpdate = joi
  .object({
    title: joi.string().min(3).max(100).messages({
      "string.min": "O título deve ter pelo menos 3 caracteres",
      "string.max": "O título deve ter no máximo 100 caracteres",
    }),
    description: joi.string().max(500).allow("").messages({
      "string.max": "A descrição deve ter no máximo 500 caracteres",
    }),
    completed: joi.boolean().messages({
      "boolean.base": "O campo 'completed' deve ser verdadeiro ou falso",
    }),
    category: joi.string().required().messages({
      "any.required": "A categoria é obrigatória",
      "string.empty": "A categoria não pode estar vazia",
    }),
    priority: joi.string().required().messages({
      "any.required": "A prioridade é obrigatória",
      "string.empty": "A prioridade não pode estar vazia",
    }),
  })
  .min(1)
  .messages({
    "object.min": "Pelo menos um campo deve ser informado para atualização",
  });

module.exports = schemaTaskUpdate;

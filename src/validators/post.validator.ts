import Joi from "joi";

export const postValidator = Joi.object({
    title: Joi
        .string()
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ\w\s.,_!?+=-]{1,20}$/)
        .messages({
            "string.pattern.base": "min 1 max 20 characters",
            "string.empty": "field 'title' is required"
        }),
    body: Joi
        .string()
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ\w\s.,!?+=-]{10,100}$/)
        .messages({
            "string.pattern.base": "min 10 max 100 characters",
            "string.empty": "field 'body' is required"
        })
});
import { Joi, celebrate } from 'celebrate';

export const validateAuth = celebrate({
    body: Joi.object().keys({
        email: Joi.string().required().email()
          .message('Поле "email" должно быть валидным email-адресом')
          .messages({
            'string.required': 'Поле "email" должно быть заполнено',
          }),
        password: Joi.string().required()
          .messages({
            'string.empty': 'Поле "password" должно быть заполнено',
          }),
      }),
});

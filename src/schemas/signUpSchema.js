import Joi from 'joi';
export default Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),

  password: Joi.string().min(8).required(),

  refPassword: Joi.valid(Joi.ref('password')).messages({
    'any.only': "passwords don't match",
  }),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'ua'] },
    })
    .required(),
}).required();

import Joi from 'joi';
export default Joi.object({
  password: Joi.string().min(8),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net', 'ua'] },
  }),
}).required();

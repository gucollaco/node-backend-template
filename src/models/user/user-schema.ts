import joi from 'joi';

/**
 * Definition of the user schema.
 * This validates the information required for the user insertion.
 */
export default joi.object().keys({
  name: joi.string().required().min(2).max(40),
  email: joi.string().required(),
  role: joi.string().required(),
});

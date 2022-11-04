import buildGenerateUser from './user';
import userSchema from './user-schema';
import validator from '../validator';

/**
 * Create the userValidator, a function that validades a given payload based on the user schema.
 */
const userValidator = validator(userSchema);

/**
 * Builds the generateUser , a function that validades a given payload based on the user schema.
 */
const generateUser = buildGenerateUser(userValidator);

export default generateUser;

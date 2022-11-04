import { ValidationError, ValidationErrorItem, Schema } from 'joi';

import { UserInfo } from '../../types';

/**
 * Receives a schema, and makes a function that validades a payload based on the given schema.
 * @param schema the schema that should be validated.
 * @returns function that validades a given payload based on the given schema.
 */
const validator = (schema: Schema) => (payload: UserInfo) => {
  const { error }: { error: ValidationError | undefined } = schema.validate(
    payload,
    { abortEarly: false }
  );

  if (!error) return { error: '' };

  const message: string = error.details
    .map((item: ValidationErrorItem) => item.message)
    .join('\n');
  return { error: message };
};

export default validator;

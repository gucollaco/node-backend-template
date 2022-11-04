import { InMemoryUser, User } from '../../../types';

/**
 * Standardizes the user object into the generalized User type.
 * @param user receives an InMemoryUser typed object.
 * @returns returns a User typed object.
 */
const serializeSingle = (user: InMemoryUser): User => ({
  id: user.index,
  name: user.name,
  email: user.email,
  role: user.role,
  created_at: user.created_at,
  updated_at: user.updated_at,
});

/**
 * Serializes multiple users, or only one user.
 * @param data users to be serialized.
 * @returns an object or an array of serialized users. Can return null in case no users are received as param.
 */
const serialize = (
  data: InMemoryUser | InMemoryUser[] | undefined | null
): User | User[] | null => {
  if (!data) return null;
  if (Array.isArray(data)) return data.map(serializeSingle);
  return serializeSingle(data);
};

export default serialize;

import { InMemoryUser, User } from '../../../types';

import usersCollection from '../../../../data-layer/db/memory/users';
import serialize from './serializer';

/**
 * Method to remove a user from the in-memory db, based on an id.
 * @param id id of the user to be removed.
 * @returns the deleted user's information, or null, in case user was deleted.
 */
export default async (id: string): Promise<User | null> => {
  const user: InMemoryUser | null = usersCollection.findOne({
    index: { $eq: id },
  });

  if (!user) return null;

  usersCollection.removeWhere({ index: { $eq: id } });
  return serialize(user) as User;
};

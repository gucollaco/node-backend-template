import { InMemoryUser, User } from '../../../types';

import usersCollection from '../../../../data-layer/db/memory/users';
import serialize from './serializer';

/**
 * Method to retrieve a user from the in-memory db, based on an id.
 * @param id id of the user to be retrieved.
 * @returns the retrieved user's information, or null, in case no user was found with the given id.
 */
export default async (id: string): Promise<User | null> => {
  const user: InMemoryUser | null = usersCollection.findOne({
    index: { $eq: id },
  });
  return serialize(user) as User | null;
};

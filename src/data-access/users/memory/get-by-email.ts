import { InMemoryUser, User } from '../../../types';

import usersCollection from '../../../../data-layer/db/memory/users';
import serialize from './serializer';

/**
 * Method to retrieve a user from the in-memory db, based on an email.
 * @param email email of the user to be retrieved.
 * @returns the retrieved user's information, or null, in case no user was found with the given email.
 */
export default async (email: string): Promise<User | null> => {
  const user: InMemoryUser | null = usersCollection.findOne({
    email: { $eq: email },
  });
  return serialize(user) as User | null;
};

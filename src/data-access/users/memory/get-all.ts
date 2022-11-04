import { InMemoryUser, User } from '../../../types';

import usersCollection from '../../../../data-layer/db/memory/users';
import serialize from './serializer';

/**
 * Method to retrieve all users from the in-memory db.
 * @returns the retrieved users' information.
 */
export default async (): Promise<User[]> => {
  const users: InMemoryUser[] = usersCollection.find();
  return serialize(users) as User[];
};

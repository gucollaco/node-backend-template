import { v4 as uuidv4 } from 'uuid';

import { InMemoryUser, User, UserInfo } from '../../../types';

import generateUser from '../../../models/user';
import usersCollection from '../../../../data-layer/db/memory/users';
import serialize from './serializer';

/**
 * Method to create a user on the in-memory db, based on a user information payload.
 * @param userInfo the information required for the user to be created.
 * @returns the created user's information.
 */
export default async (userInfo: UserInfo): Promise<User> => {
  const user = generateUser(userInfo);
  const newUser = {
    index: uuidv4(),
    name: user.getName(),
    email: user.getEmail(),
    role: user.getRole(),
    created_at: new Date(),
    updated_at: new Date(),
  } as InMemoryUser;

  return serialize(usersCollection.insertOne(newUser)) as User;
};

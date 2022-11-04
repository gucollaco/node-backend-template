import { v4 as uuidv4 } from 'uuid';
import { InMemoryUser, User, UserInfo } from '../../../types';

import usersCollection from '../../../../data-layer/db/memory/users';
import serialize from './serializer';
import generateUser from '../../../models/user';

/**
 * Method to retrieve a user from the in-memory db, based on an email.
 * In case no user is found, a new user will be created with the given user information payload.
 * @param email email of the user to be retrieved.
 * @param userInfo the information required for the user to be created.
 * @returns the retrieved user's information, or the created user's information, in case no user was found with the given email.
 */
export default async (email: string, userInfo: UserInfo): Promise<User> => {
  const existingUser: InMemoryUser | null = usersCollection.findOne({
    email: { $eq: email },
  });

  if (!existingUser) {
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
  }

  return serialize(existingUser) as User;
};

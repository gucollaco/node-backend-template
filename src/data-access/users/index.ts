import { User, UserInfo } from '../../types';

import { db } from '../../../config/config.json';

let usersMethods = null;

/**
 * Based on the defined db to be used, the user data access methods will require the expected implementations.
 */
switch (db) {
  default:
    usersMethods = require('./memory');
    break;
}

const {
  getAll,
  getById,
  getByEmail,
  create,
  removeById,
  getByEmailOrCreate,
}: {
  getAll: () => Promise<User[]>;
  getById: (id: string) => Promise<User | null>;
  getByEmail: (email: string) => Promise<User | null>;
  create: (userInfo: UserInfo) => Promise<User>;
  removeById: (id: string) => Promise<User | null>;
  getByEmailOrCreate: (email: string, userInfo: UserInfo) => Promise<User>;
} = usersMethods;

export { getAll, getById, getByEmail, create, removeById, getByEmailOrCreate };

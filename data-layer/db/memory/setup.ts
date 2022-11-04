import loki from 'lokijs';

import { InMemoryUser } from '../../../src/types';

import logger from '../../../src/lib/logger';

import usersSeed from './users-seed';

const memo = new loki.LokiMemoryAdapter();
const db = new loki('memory.db', { adapter: memo });

const databaseLoad = () => {
  db.loadDatabase({}, () => {
    databaseInitialize(db as loki);
    logger.info('Memory db initialized');
  });
};

const databaseInitialize = (db: loki) => {
  if (!db.getCollection('users')) {
    const users: Collection<InMemoryUser> =
      db.addCollection<InMemoryUser>('users');
    users.insert(usersSeed);
  }
};

databaseLoad();

export default db;

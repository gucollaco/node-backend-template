import db from './setup';

import { InMemoryUser } from '../../../src/types';

export default db.getCollection<InMemoryUser>('users');

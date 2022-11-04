import { v4 as uuidv4 } from 'uuid';

import { InMemoryUser } from '../../../src/types';

export default [
  {
    index: uuidv4(),
    name: 'Person One',
    email: 'person.one@email.com',
    role: 'user',
    created_at: new Date(),
    updated_at: new Date(),
  } as InMemoryUser,
  {
    index: uuidv4(),
    name: 'Person Two',
    email: 'person.one@email.com',
    role: 'user',
    created_at: new Date(),
    updated_at: new Date(),
  } as InMemoryUser,
  {
    index: uuidv4(),
    name: 'Person Three',
    email: 'person.three@email.com',
    role: 'admin',
    created_at: new Date(),
    updated_at: new Date(),
  } as InMemoryUser,
] as InMemoryUser[];

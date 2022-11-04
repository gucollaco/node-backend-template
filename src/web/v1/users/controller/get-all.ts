import { Request, Response } from 'express';
import { User } from './../../../../types';

import { getAll } from '../../../../data-access/users';

/**
 * Function that handles fetching all users, and sends the response to the client side.
 */
export default async (_: Request, res: Response) => {
  const users: User[] = await getAll();

  res.status(200).json({
    state: true,
    message: 'Users retrieved successfully',
    value: users,
  });
};

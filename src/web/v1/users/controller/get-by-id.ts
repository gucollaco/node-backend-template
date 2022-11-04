import { Request, Response } from 'express';
import { User } from './../../../../types';

import { getById } from '../../../../data-access/users';

/**
 * Function that handles fetching a user by id, and sends the response to the client side.
 */
export default async (req: Request<{ id: string }>, res: Response) => {
  const { id }: { id: string } = req.params;

  const user: User | null = await getById(id);
  console.log('user', user);

  if (!user)
    return res
      .status(404)
      .json({ state: false, message: 'User not found', value: null });

  res.status(200).json({
    state: true,
    message: 'User retrieved successfully',
    value: user,
  });
};

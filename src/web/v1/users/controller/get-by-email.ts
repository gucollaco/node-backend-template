import { Request, Response } from 'express';
import { User } from './../../../../types';

import { getByEmail } from '../../../../data-access/users';

/**
 * Function that handles fetching a user by email, and sends the response to the client side.
 */
export default async (req: Request<{ email: string }>, res: Response) => {
  const { email }: { email: string } = req.params;

  const user: User | null = await getByEmail(email);

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

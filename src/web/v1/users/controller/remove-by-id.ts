import { Request, Response } from 'express';
import { User } from '../../../../types';

import { removeById } from '../../../../data-access/users';

/**
 * Function that handles removing a user by an id, and sends the response to the client side.
 */
export default async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id }: { id: string } = req.params;

    const user: User | null = await removeById(id);

    if (!user)
      return res
        .status(404)
        .json({ state: false, message: 'User not found', value: null });

    res.status(200).json({
      state: true,
      message: 'User removed successfully',
      value: user,
    });
  } catch (error) {
    res.status(400).json({
      state: false,
      message: (error as Error).message,
      value: null,
    });
  }
};

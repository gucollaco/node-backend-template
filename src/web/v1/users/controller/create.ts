import { Request, Response } from 'express';
import { User, UserInfo } from '../../../../types';

import { create } from '../../../../data-access/users';

/**
 * Function that handles user creation, and sends the response to the client side.
 */
export default async (req: Request, res: Response) => {
  try {
    const userInfo: UserInfo = req.body;

    const user: User = await create(userInfo);

    res
      .status(200)
      .json({ state: true, message: 'User created successfully', value: user });
  } catch (error) {
    res
      .status(400)
      .json({ state: false, error: (error as Error).message, value: null });
  }
};

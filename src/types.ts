/**
 * Type for an in-memory database user element.
 */
export type InMemoryUser = {
  index: string;
  name: string;
  email: string;
  role: string;
  created_at: Date;
  updated_at: Date;
  meta: any;
  $loki: number;
};

/**
 * Type for a generalized user element.
 * All database specific user types should later be serialized to this type.
 */
export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: Date;
  updated_at: Date;
};

/**
 * Type that represents the required user information to create a user.
 */
export type UserInfo = {
  name: string;
  email: string;
  role: string;
};

/**
 * Type that represents the payload of our jwt token implementation.
 */
export type TokenPayload = {
  email: string;
};

import { UserInfo } from '../../types';

/**
 * Method to build a generateUser function, which can later be user to generate a user.
 * @param userValidator
 * @returns a function that can be used to generate a user element.
 */
const buildGenerateUser = (
  userValidator: (payload: UserInfo) => { error: string }
) => {
  /**
   * Method to get information from a validated User.
   * @param param receives a UserInfo typed payload as param.
   * @returns returns methods capable of retrieving information from a validated user.
   */
  const generateUser = ({ name, email, role }: UserInfo) => {
    // Validates the given user payload.
    const { error }: { error: string } = userValidator({ name, email, role });

    // If there is an error defined, an Error element is thrown.
    if (!!error) throw new Error(error);

    // Returns methods that retrieve the user's information.
    return {
      getName: (): string => name,
      getEmail: (): string => email,
      getRole: (): string => role,
    };
  };

  return generateUser;
};

export default buildGenerateUser;

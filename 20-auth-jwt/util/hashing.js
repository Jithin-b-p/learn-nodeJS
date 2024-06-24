import { compareSync, genSaltSync, hashSync } from "bcrypt";

const saltRound = 10;
export const hashPassword = (password) => {
  const salt = genSaltSync(saltRound);
  const hashedPassword = hashSync(password, salt);

  return hashedPassword;
};

export const verifyhashPassword = (givenPassword, hashedPassword) => {
  return compareSync(givenPassword, hashedPassword);
};

import bcryptjs from "bcryptjs";

export const hashPassword = async (password: string) => {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  const isMatch = await bcryptjs.compare(password, hashedPassword);
  return isMatch;
};

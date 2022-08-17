export type UserModel = {
  email?: string;
};

export type LoginModel = {
  username: string;
  password: string;
};

export type SignUpModel = {
  username: string;
  password: string;
  passwordConfirmation: string;
};

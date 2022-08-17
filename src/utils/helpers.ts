export const classNames = (...classes: any) => {
  return classes?.filter(Boolean).join(" ");
};

export const genEmailByName = (userName: string) => {
  return userName + `${process.env.NEXT_PUBLIC_USER_NAME_PREFIX}`;
};

export const getNameByEmail = (email: string) => {
  return email.replace(`${process.env.NEXT_PUBLIC_USER_NAME_PREFIX}`, "");
};

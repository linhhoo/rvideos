export const classNames = (...classes: any) => {
  return classes?.filter(Boolean).join(" ");
};

export const genEmailByName = (userName: string) => {
  return userName + `${process.env.NEXT_PUBLIC_USER_NAME_PREFIX}`;
};

export const getNameByEmail = (email: string) => {
  return email.replace(`${process.env.NEXT_PUBLIC_USER_NAME_PREFIX}`, "");
};

export const youtubeParser = (url: string) => {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[7].length == 11) {
    return match[7];
  }
  return null;
};

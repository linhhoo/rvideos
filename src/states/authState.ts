import { UserModel } from "@/models/userModel";
import { atom } from "recoil";

type User = UserModel | null;

export const authState = atom({
  key: "user",
  default: null as User,
});

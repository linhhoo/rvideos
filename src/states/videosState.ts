import { VideoModel } from "@/models/videoModel";
import { atom } from "recoil";

export const videosState = atom({
  key: "videos",
  default: [] as VideoModel[],
});

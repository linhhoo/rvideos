import { useState, useCallback } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { authState } from "@/states/authState";
import { videosState } from "@/states/videosState";
import { supabase } from "@/utils/supabaseClient";
import { youtubeParser, getNameByEmail } from "@/utils/helpers";
import {
  YoutubeVideoSnippetModel,
  ShareVideoInputModel,
} from "@/models/videoModel";
import { youtubeInfoAPI } from "@/api/youtubeAPI";

export const useShareVideo = () => {
  const user = useRecoilValue(authState);
  const [videos, setVideos] = useRecoilState(videosState);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onResetState = useCallback(() => {
    setIsError(false);
    setIsSuccess(false);
  }, []);

  const onInsertVideoInfo = useCallback(
    async (url: string, snippet: YoutubeVideoSnippetModel) => {
      const _input: ShareVideoInputModel = {
        url: url,
        title: snippet.title,
        description: snippet.description,
        thumb: snippet.thumbnails.standard.url,
        blur_thumb: snippet.thumbnails.default.url,
        user_id: user?.id,
        user_name: user?.email ? getNameByEmail(user?.email) : "No name",
      };
      const { data, error } = await supabase.from("videos").insert([_input]);
      if (data && data.length) {
        const _video = await data.concat(videos);
        setVideos(_video);
        setIsSuccess(true);
      }
      if (error) {
        setIsError(true);
        setErrorMessage(error.message);
      }
      setIsLoading(false);
    },
    [setVideos, videos, user?.email, user?.id]
  );

  const onShareVideo = useCallback(
    async (url: string) => {
      onResetState();
      setIsLoading(true);
      const videoId = youtubeParser(url);
      if (!videoId) {
        setIsError(true);
        setErrorMessage("Invalid youtube video url");
        setIsLoading(false);
        return;
      }

      const res = await youtubeInfoAPI(videoId);
      if (!res) {
        setIsError(true);
        setErrorMessage("The video doesn't exist");
        setIsLoading(false);
        return;
      }
      const { snippet } = res;
      onInsertVideoInfo(url, snippet);
    },
    [onInsertVideoInfo, onResetState]
  );

  return {
    isError,
    errorMessage,
    isLoading,
    isSuccess,
    onShareVideo,
    onResetState,
  };
};

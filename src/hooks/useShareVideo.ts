import { useEffect, useState, useCallback } from "react";
import { useRecoilValue } from "recoil";
import { authState } from "@/states/authState";
import { supabase } from "@/utils/supabaseClient";
import { youtubeParser, getNameByEmail } from "@/utils/helpers";
import { YoutubeVideoSnippetModel } from "@/models/videoModel";
import { youtubeInfoAPI } from "@/api/youtubeAPI";

export const useShareVideo = () => {
  const user = useRecoilValue(authState);
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
      const _input = {
        url: url,
        title: snippet.title,
        description: snippet.description,
        thumb: snippet.thumbnails.standard.url,
        user_id: user?.id,
        user_name: user?.email ? getNameByEmail(user?.email) : "No name",
      };
      const { data, error } = await supabase.from("videos").insert([_input]);
      if (data && data.length) {
        setIsSuccess(true);
      }
      if (error) {
        setIsError(true);
        setErrorMessage(error.message);
      }
      console.log("data===>", data, error);
      setIsLoading(false);
    },
    [user?.email, user?.id]
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

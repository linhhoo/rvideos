import { useEffect, useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import { videosState } from "@/states/videosState";
import { supabase } from "@/utils/supabaseClient";
import { youtubeParser, getNameByEmail } from "@/utils/helpers";
import { YoutubeVideoSnippetModel } from "@/models/videoModel";
import { youtubeInfoAPI } from "@/api/youtubeAPI";

const PER_PAGE = 5;

export const useVideos = () => {
  const [videos, setVideos] = useRecoilState(videosState);
  const [isLoading, setIsLoading] = useState(false);
  const [isEndList, setIsEndList] = useState(false);

  const onGetVideo = useCallback(async () => {
    setIsLoading(true);
    const _videosLength = videos ? videos.length : 0;
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .order("id", { ascending: false })
      .range(_videosLength, _videosLength + PER_PAGE - 1);
    if (data) {
      if (data.length < PER_PAGE) {
        setIsEndList(true);
      }
      const _videos = await videos.concat(data);
      setVideos(_videos);
    }
    setIsLoading(false);
  }, [setVideos, videos]);

  useEffect(() => {
    if (!videos.length) {
      onGetVideo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    videos,
    isEndList,
    onGetVideo,
  };
};

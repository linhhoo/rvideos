import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import Authen from "@/components/molecules/Authen";
import Profile from "@/components/molecules/Profile";
import LogoImg from "@/assets/logo.webp";
import LogoIcon from "@/assets/logo-icon.webp";
import { useAuth } from "@/hooks/useAuth";
import VideoITem from "@/components/molecules/VideoITem";
import { useVideos } from "@/hooks/useVideos";
import Button from "../atoms/Button";

type Props = {};

const Videos: React.FC<Props> = ({}) => {
  const { videos, isEndList, isLoading, onGetVideo } = useVideos();

  const isShowLoadMore = useMemo(
    () => videos.length && !isLoading && !isEndList,
    [videos, isEndList, isLoading]
  );

  return (
    <div className="pt-[80px] max-w-[1000px] m-auto px-[20px]">
      {videos.map((video, index) => (
        <React.Fragment key={`video-item-$${video.id}-${index}`}>
          <VideoITem data={video} />
        </React.Fragment>
      ))}
      {!!isShowLoadMore && (
        <div className="mb-[90px]">
          <Button
            className="w-[100px] h-[100px] bg-secondary rounded-[50%] block m-auto"
            onClick={onGetVideo}
          >
            Load more
          </Button>
        </div>
      )}
      {!!isLoading && (
        <div className="mb-[90px]">
          <div
            style={{ borderTopColor: "transparent" }}
            className="w-6 h-6 border-2  border-solid rounded-full animate-spin m-auto "
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(Videos);

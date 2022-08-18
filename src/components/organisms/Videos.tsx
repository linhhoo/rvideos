import React, { useCallback, useMemo, useState } from "react";
import ListVideoItem from "@/components/molecules/ListVideoItem";
import VideoDetail from "@/components/molecules/VideoDetail";
import { useVideos } from "@/hooks/useVideos";
import Button from "../atoms/Button";
import { VideoModel } from "@/models/videoModel";
type Props = {};

const Videos: React.FC<Props> = ({}) => {
  const { videos, isEndList, isLoading, onGetVideo } = useVideos();
  const [isShowVideoDetail, setIsShowVideoDetail] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoModel | null>(null);

  const isShowLoadMore = useMemo(
    () => videos.length && !isLoading && !isEndList,
    [videos, isEndList, isLoading]
  );

  const onOpenVideoDetail = useCallback((data: VideoModel) => {
    setSelectedVideo(data);
    setIsShowVideoDetail(true);
  }, []);

  const onCloseVideoDetail = useCallback(() => {
    setIsShowVideoDetail(false);
    setSelectedVideo(null);
  }, []);

  return (
    <div className="pt-[80px] max-w-[1000px] m-auto px-[20px]">
      {videos.map((video, index) => (
        <React.Fragment key={`video-item-$${video.id}-${index}`}>
          <ListVideoItem data={video} onClick={onOpenVideoDetail} />
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
      <VideoDetail
        data={selectedVideo}
        open={isShowVideoDetail}
        onClose={onCloseVideoDetail}
      />
    </div>
  );
};

export default React.memo(Videos);

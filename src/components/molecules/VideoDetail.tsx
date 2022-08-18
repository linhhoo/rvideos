import React from "react";
import Text from "@/components/atoms/Text";
import Modal from "@/components/atoms/Modal";
import Title from "@/components/atoms/Title";
import { VideoModel } from "@/models/videoModel";
import { youtubeParser } from "@/utils/helpers";

interface Props {
  open: boolean;
  onClose: () => void;
  data: VideoModel | null;
}

const VideoDetail = ({ open, onClose, data }: Props) => {
  const videoId = data?.url ? youtubeParser(data.url) : "";
  return (
    <Modal
      open={open}
      onClose={onClose}
      className="py-[56px] px-[20px] flex flex-col items-start overflow-hidden"
    >
      <div className="mb-[20px] w-[100%]">
        <iframe
          id="ytplayer"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=1`}
        ></iframe>
      </div>

      <Title>{data?.title}</Title>
      <Title
        className="mb-[10px]"
        type="h3"
      >{`Share by: ${data?.user_name}`}</Title>
      <Text>Description:</Text>
      <Text className="w-[100%] text-ellipsis overflow-hidden">
        {data?.description}
      </Text>
    </Modal>
  );
};

export default React.memo(VideoDetail);

import React, { useState, useCallback } from "react";
import Thumb from "@/components/atoms/Thumb";
import Title from "@/components/atoms/Title";
import Text from "@/components/atoms/Text";
import { VideoModel } from "@/models/videoModel";

type Props = {
  data: VideoModel;
};

const VideoItem: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-row justify-between items-start mb-[20px]">
      <Thumb
        src={data.thumb}
        blurImage={data.blur_thumb}
        className="w-[40vw] h-[30vw] max-w-[400px] max-h-[300px]"
      />
      <div className="flex flex-1 flex-col pl-[30px] items-top">
        <Title type="h1">{data.title}</Title>
        <Title type="h3">{`Share by ${data.user_name}`}</Title>
        <Text className="line-clamp-4">{data.description}</Text>
      </div>
    </div>
  );
};

export default React.memo(VideoItem);

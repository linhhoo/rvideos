import React, { useState, useCallback } from "react";
import Thumb from "@/components/atoms/Thumb";
import Title from "@/components/atoms/Title";
import Text from "@/components/atoms/Text";
import { VideoModel } from "@/models/videoModel";

type Props = {
  data: VideoModel;
  onClick: (data: VideoModel) => void;
};

const VideoItem: React.FC<Props> = ({ data, onClick }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mb-[50px]">
      <Thumb
        src={data.thumb}
        blurImage={data.blur_thumb}
        className="w-[100%] md:w-[40vw]  md:max-w-[400px]"
        onClick={() => onClick(data)}
      />
      <div className="flex flex-1 flex-col md:pl-[30px] pt-[30px] md:pt-0 items-top oveflow-hidden w-[100%]">
        <Title className="text-bold" onClick={() => onClick(data)} type="h1">
          {data.title}
        </Title>
        <Title
          className="mb-[10px]"
          type="h3"
        >{`Share by: ${data.user_name}`}</Title>
        <Text>Description:</Text>
        <Text className="line-clamp-5">{data.description}</Text>
      </div>
    </div>
  );
};

export default React.memo(VideoItem);

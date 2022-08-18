import React, { useCallback, useEffect, useState } from "react";
import Icon from "@/components/atoms/Icon";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Alert from "@/components/atoms/Alert";
import Modal from "@/components/atoms/Modal";
import Title from "@/components/atoms/Title";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useShareVideo } from "@/hooks/useShareVideo";
import { ShareVideoModel } from "@/models/videoModel";

interface Props {
  open: boolean;
  onClose: () => void;
}

const schema = yup.object({
  videoUrl: yup.string().required("Youtube video url is a required field"),
});

const ShareVideoForm = ({ open, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ShareVideoModel>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const {
    onShareVideo,
    isError,
    errorMessage,
    isLoading,
    isSuccess,
    onResetState,
  } = useShareVideo();

  const onSubmit = useCallback(
    async (data: ShareVideoModel) => {
      if (isValid) {
        onShareVideo(data.videoUrl);
      }
    },
    [isValid, onShareVideo]
  );

  const onCloseModal = useCallback(() => {
    onResetState();
    reset();
    onClose();
  }, [onClose, onResetState, reset]);

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const renderInputErrorMessage = useCallback((message: string) => {
    return (
      <div className="h-[30px]">
        <Text className="text-red">{message}</Text>
      </div>
    );
  }, []);

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      className="py-[56px] px-[180px] flex flex-col items-center"
    >
      <Title>Share Youtube Video</Title>
      <form className="mt-[40px]" onSubmit={handleSubmit(onSubmit)}>
        {!!isError && <Alert type="error">{errorMessage || ""}</Alert>}
        {!!isSuccess && (
          <Alert type="success">Share the youtube video successfully</Alert>
        )}
        <div
          className={
            "sm:flex items-center h-[38px] md:w-[348px] w-[300px] hidden relative"
          }
        >
          <Icon name="user" className="absolute left-[8px]" />
          <input
            {...register("videoUrl")}
            className="flex flex-1 rounded-[8px] focus:outline-none focus:border-main-secondary ring-1 ring-blue-dark2 focus:ring-main-secondary h-[100%] pl-[40px] pr-[30px]"
            placeholder="Youtube video url"
            type="text"
            name="videoUrl"
          />
        </div>
        {renderInputErrorMessage(errors.videoUrl?.message || "")}

        {isLoading ? (
          <Button className="bg-primary w-full h-[50px] rounded-[8px] flex text-white justify-center items-center">
            <div
              style={{ borderTopColor: "transparent" }}
              className="w-6 h-6 border-2  border-solid rounded-full animate-spin"
            />
          </Button>
        ) : (
          <Button
            name="share-video_submit-button"
            className="bg-primary w-full h-[50px] rounded-[8px] text-white mt-[20px]"
          >
            Share video
          </Button>
        )}
      </form>
    </Modal>
  );
};

export default React.memo(ShareVideoForm);

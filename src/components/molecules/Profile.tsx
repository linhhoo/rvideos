import React, { useState, useCallback } from "react";
import Icon from "@/components/atoms/Icon";
import Button from "@/components/atoms/Button";
import Modal from "@/components/atoms/Modal";
import Title from "@/components/atoms/Title";
import { useAuth } from "@/hooks/useAuth";
import { getNameByEmail } from "@/utils/helpers";

type Props = {};

const Profile: React.FC<Props> = ({}) => {
  const { user, onLogout, isLogoutLoading } = useAuth();
  const [isVisible, setVisible] = useState(false);

  const onToogleModal = useCallback(() => {
    setVisible(!isVisible);
  }, [isVisible, setVisible]);

  const _renderShareVideoModal = useCallback(() => {
    return (
      <Modal
        open={isVisible}
        onClose={onToogleModal}
        className="py-[56px] px-[180px] flex flex-col items-center"
      >
        <Title>ShareVideo</Title>
      </Modal>
    );
  }, [isVisible, onToogleModal]);

  return (
    <div className="flex flex-row justify-between items-center">
      <Title type="h3" className="md:block hidden mr-[10px]">{`Welcome ${
        user?.email && getNameByEmail(user.email)
      }`}</Title>
      <Button className="bg-gray mr-[10px]" onClick={onToogleModal}>
        Share new video
      </Button>
      <Button className="bg-primary text-white" onClick={onLogout}>
        {isLogoutLoading ? (
          <div
            style={{ borderTopColor: "transparent" }}
            className="w-6 h-6 border-2  border-solid rounded-full animate-spin"
          />
        ) : (
          "Logout"
        )}
      </Button>
      {_renderShareVideoModal()}
    </div>
  );
};

export default React.memo(Profile);

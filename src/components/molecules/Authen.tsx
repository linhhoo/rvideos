import React, { useState, useCallback } from "react";
import Icon from "@/components/atoms/Icon";
import Button from "@/components/atoms/Button";
import Modal from "@/components/atoms/Modal";

type Props = {};

const Authen: React.FC<Props> = ({}) => {
  const [isVisible, setVisible] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const onToogleModal = useCallback(() => {
    setVisible(!isVisible);
  }, [isVisible, setVisible]);

  const onShowRegisterModal = useCallback(() => {
    setIsRegister(true);
    onToogleModal();
  }, [onToogleModal, setIsRegister]);

  const onShowLoginModal = useCallback(() => {
    setIsRegister(false);
    onToogleModal();
  }, [onToogleModal, setIsRegister]);

  const _renderAuthenModal = useCallback(() => {
    return (
      <Modal open={isVisible} onClose={onToogleModal}>
        <div>login</div>
      </Modal>
    );
  }, [isVisible, onToogleModal]);

  return (
    <React.Fragment>
      <Button className="bg-gray mr-[10px]" onClick={onShowRegisterModal}>
        Register
      </Button>
      <Button className="bg-primary text-white" onClick={onShowLoginModal}>
        Login
      </Button>
      {_renderAuthenModal()}
    </React.Fragment>
  );
};

export default React.memo(Authen);

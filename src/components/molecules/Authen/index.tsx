import React, { useState, useCallback } from "react";
import Button from "@/components/atoms/Button";
import Modal from "@/components/atoms/Modal";
import Title from "@/components/atoms/Title";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

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
      <Modal
        open={isVisible}
        onClose={onToogleModal}
        className="py-[56px] px-[20px] md:px-[180px] flex flex-col items-center"
      >
        <Title>
          {!isRegister ? "Sign in to Rvideos" : "Create your account"}
        </Title>
        {!isRegister ? (
          <LoginForm onChangeForm={() => setIsRegister(true)} />
        ) : (
          <SignUpForm onChangeForm={() => setIsRegister(false)} />
        )}
      </Modal>
    );
  }, [isRegister, isVisible, onToogleModal]);

  return (
    <React.Fragment>
      <Button
        name="register-button"
        className="bg-gray mr-[10px]"
        onClick={onShowRegisterModal}
      >
        Register
      </Button>
      <Button
        name="login-button"
        className="bg-primary text-white"
        onClick={onShowLoginModal}
      >
        Login
      </Button>
      {_renderAuthenModal()}
    </React.Fragment>
  );
};

export default React.memo(Authen);

import React, { useCallback, useState } from "react";
import Icon from "@/components/atoms/Icon";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Alert from "@/components/atoms/Alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/hooks/useAuth";
import { LoginModel } from "@/models/userModel";

interface Props {
  onChangeForm: () => void;
}

const schema = yup.object({
  username: yup.string().required("Username is a required field"),
  password: yup.string().required("Password is required field").min(6),
});

const LoginForm = ({ onChangeForm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginModel>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { onLogin, isLoginLoading, loginError } = useAuth();
  const [showPass, setShowPass] = useState(false);

  const onSubmit = useCallback(
    async (data: LoginModel) => {
      if (isValid) {
        onLogin(data.username, data.password);
      }
    },
    [isValid, onLogin]
  );

  const onToggleEye = useCallback(() => {
    setShowPass(!showPass);
  }, [showPass]);

  const renderInputErrorMessage = useCallback((message: string) => {
    return (
      <div className="h-[30px]">
        <Text className="text-red">{message}</Text>
      </div>
    );
  }, []);

  return (
    <form className="mt-[40px]" onSubmit={handleSubmit(onSubmit)}>
      {!!loginError && <Alert type="error">{loginError?.message || ""}</Alert>}
      <div
        className={
          "sm:flex items-center h-[38px] md:w-[348px] w-[300px] hidden relative"
        }
      >
        <Icon name="user" className="absolute left-[8px]" />
        <input
          {...register("username")}
          className="flex flex-1 rounded-[8px] focus:outline-none focus:border-main-secondary ring-1 ring-blue-dark2 focus:ring-main-secondary h-[100%] pl-[40px] pr-[30px]"
          placeholder="Username"
          type="text"
          name="username"
        />
      </div>
      {renderInputErrorMessage(errors.username?.message || "")}

      <div
        className={
          "sm:flex items-center h-[38px] md:w-[348px] w-[300px] hidden relative  mt-[10px]"
        }
      >
        <Icon name="lock" className="absolute left-[8px]" />
        <input
          {...register("password")}
          className="flex flex-1 bg-blue-light3 rounded-[8px] focus:outline-none focus:border-main-secondary ring-1 ring-blue-dark2 focus:ring-main-secondary h-[100%] pl-[40px] pr-[30px]"
          placeholder="Password"
          type={showPass ? "text" : "password"}
          name="password"
        />
        <Icon
          name={!showPass ? "eye" : "eyeOff"}
          size={18}
          className="text-blue absolute right-[8px]"
          onClick={onToggleEye}
        />
      </div>
      {renderInputErrorMessage(errors?.password?.message || "")}

      {isLoginLoading ? (
        <Button className="bg-primary w-full h-[50px] rounded-[8px] flex text-white justify-center items-center">
          <div
            style={{ borderTopColor: "transparent" }}
            className="w-6 h-6 border-2  border-solid rounded-full animate-spin"
          />
        </Button>
      ) : (
        <Button className="bg-primary w-full h-[50px] rounded-[8px] text-white mt-[20px]">
          Sign in
        </Button>
      )}

      <Button
        className="w-full h-[50px] mt-[20px]"
        onClick={() => onChangeForm()}
      >
        Register new account
      </Button>
    </form>
  );
};

export default React.memo(LoginForm);

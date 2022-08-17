import React, { useMemo } from "react";
import {
  HomeIcon,
  PaperAirplaneIcon,
  UserIcon,
  LogoutIcon,
  LockClosedIcon,
  EyeIcon,
  EyeOffIcon,
} from "@heroicons/react/outline";
import { classNames } from "@/utils/helpers";

type IconName = "home" | "send" | "user" | "lock" | "logout" | "eye" | "eyeOff";

type Props = {
  name: IconName;
  width?: number;
  height?: number;
  onClick?: () => void;
  size?: number;
  className?: string;
};

const Icon: React.FC<Props> = ({
  name,
  width,
  height,
  onClick,
  size = 24,
  className,
}) => {
  const _className = useMemo(
    () => classNames("text-primary", className, onClick && "cursor-pointer"),
    [className, onClick]
  );
  const icon: any = {
    home: (
      <HomeIcon
        width={size || width}
        height={size || height}
        className={_className}
        onClick={onClick}
      />
    ),
    send: (
      <PaperAirplaneIcon
        width={size || width}
        height={size || height}
        className={_className}
        onClick={onClick}
      />
    ),
    user: (
      <UserIcon
        width={size || width}
        height={size || height}
        className={_className}
        onClick={onClick}
      />
    ),
    lock: (
      <LockClosedIcon
        width={size || width}
        height={size || height}
        className={_className}
        onClick={onClick}
      />
    ),
    logout: (
      <LogoutIcon
        width={size || width}
        height={size || height}
        className={_className}
        onClick={onClick}
      />
    ),
    eye: (
      <EyeIcon
        width={size || width}
        height={size || height}
        className={_className}
        onClick={onClick}
      />
    ),
    eyeOff: (
      <EyeOffIcon
        width={size || width}
        height={size || height}
        className={_className}
        onClick={onClick}
      />
    ),
  };

  return icon[name] ?? icon.home;
};

export default React.memo(Icon);

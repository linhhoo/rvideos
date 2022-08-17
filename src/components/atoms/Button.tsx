import React, { ReactNode } from "react";
import { classNames } from "@/utils/helpers";

type Props = {
  children: ReactNode;
  color?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  ...other
}) => {
  return (
    <button
      className={classNames(className, [
        "font-semibold text-primary p-2 rounded-lg",
      ])}
      onClick={onClick}
      {...other}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);

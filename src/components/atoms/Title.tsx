import React, { ReactNode, useMemo } from "react";
import { classNames } from "@/utils/helpers";

type Props = {
  children: ReactNode;
  className?: string;
  type?: "h1" | "h2" | "h3";
  onClick?: () => void;
};

const Title: React.FC<Props> = ({
  children,
  className,
  onClick,
  type = "h1",
  ...other
}) => {
  const _commonClass = useMemo(
    () =>
      `${
        onClick
          ? "cursor-pointer hover:text-primary transition duration-150"
          : ""
      } text-dark m-0`,
    [onClick]
  );

  const _titles = {
    h1: (
      <h1
        className={classNames("text-2xl", _commonClass, className)}
        onClick={onClick}
        {...other}
      >
        {children}
      </h1>
    ),
    h2: (
      <h2
        className={classNames("text-lg", _commonClass, className)}
        onClick={onClick}
        {...other}
      >
        {children}
      </h2>
    ),
    h3: (
      <h3
        className={classNames("text-base", _commonClass, className)}
        onClick={onClick}
        {...other}
      >
        {children}
      </h3>
    ),
  };

  return _titles[type] || _titles.h1;
};

export default React.memo(Title);

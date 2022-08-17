import React, { ReactNode, useMemo } from "react";
import { classNames } from "@/utils/helpers";

type Props = {
  children: ReactNode;
  className?: string;
  small?: boolean;
};

const Text: React.FC<Props> = ({
  children,
  className,
  small = false,
  ...other
}) => {
  const _commonClass = useMemo(
    () => `${small ? "text-sm" : "text-base"} m-0`,
    [small]
  );

  return (
    <p className={classNames(_commonClass, className)} {...other}>
      {children}
    </p>
  );
};

export default React.memo(Text);

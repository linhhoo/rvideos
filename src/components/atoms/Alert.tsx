import React, { ReactNode } from "react";
import { classNames } from "@/utils/helpers";

type Props = {
  children: ReactNode;
  color?: string;
  className?: string;
  type: "error" | "success";
};

const Alert: React.FC<Props> = ({ children, className, type, ...other }) => {
  const _alertsStyle = {
    error: "text-red bg-errorbg",
    success: "text-green bg-successbg",
  };

  return (
    <div
      className={classNames(
        _alertsStyle[type] || _alertsStyle.error,
        "p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
      )}
      {...other}
    >
      {children}
    </div>
  );
};

export default React.memo(Alert);

import React, { useMemo } from "react";
import { classNames } from "@/utils/helpers";
import Image from "next/image";

interface Props {
  src: string;
  alt?: string;
  onClick?: () => void;
  className?: string;
  blurImage?: string;
}

const Thumb = ({
  src,
  className,
  alt,
  onClick,
  blurImage,
  ...other
}: Props) => {
  const _commonClass = useMemo(
    () =>
      `${
        onClick ? "cursor-pointer" : ""
      } rounded-[8px] overflow-hidden thumb-custom`,
    [onClick]
  );

  return (
    <div
      className={classNames(_commonClass, className)}
      onClick={onClick}
      {...other}
    >
      <Image
        placeholder="blur"
        blurDataURL={blurImage || src}
        src={src}
        width={"100%"}
        height={"63%"}
        layout="responsive"
        objectFit="cover"
        alt={alt || "video thumb"}
      />
    </div>
  );
};

export default React.memo(Thumb);

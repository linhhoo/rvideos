import React, { ReactNode, useCallback } from "react";
import Image from "next/image";
import Icon from "@/components/atoms/Icon";
import Button from "@/components/atoms/Button";
import Authen from "@/components/molecules/Authen";
import LogoImg from "@/assets/logo.webp";
import LogoIcon from "@/assets/logo-icon.webp";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  const _renderLeftSegment = useCallback(() => {
    return (
      <div className="flex items-center">
        <div className="ml-[20px] mr-[30px] lg:hidden">
          <Image
            src={LogoIcon}
            width={50}
            height={50}
            className="cursor-pointer"
            alt="Rvideos"
          />
        </div>
        <div className="ml-[20px] mr-[30px] lg:block hidden">
          <Image
            src={LogoImg}
            width={150}
            height={50}
            className="cursor-pointer"
            alt="Rvideos"
          />
        </div>
      </div>
    );
  }, []);

  const _renderRightSegment = useCallback(() => {
    return (
      <div>
        <Authen />
      </div>
    );
  }, []);

  return (
    <div className="sticky top-0 backdrop-blur-xl bg-white w-full md:h-[74px] h-[62px] z-10 pt-[5px] md:pt-[10px] pr-[30px] flex flex-row justify-between items-center pl-[30px]">
      {_renderLeftSegment()}
      {_renderRightSegment()}
    </div>
  );
};

export default React.memo(Header);

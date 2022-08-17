import React, { useCallback } from "react";
import Image from "next/image";
import Authen from "@/components/molecules/Authen";
import Profile from "@/components/molecules/Profile";
import LogoImg from "@/assets/logo.webp";
import LogoIcon from "@/assets/logo-icon.webp";
import { useAuth } from "@/hooks/useAuth";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  const { user, authLoaded } = useAuth(true);

  const _renderLeftSegment = useCallback(() => {
    return (
      <React.Fragment>
        <div className="md:hidden">
          <Image
            src={LogoIcon}
            width={30}
            height={30}
            className="cursor-pointer ml-[20px] mr-[30px]"
            alt="Rvideos"
          />
        </div>
        <div className="md:block hidden">
          <Image
            src={LogoImg}
            width={90}
            height={30}
            className="cursor-pointer ml-[20px] mr-[30px]"
            alt="Rvideos"
          />
        </div>
      </React.Fragment>
    );
  }, []);

  const _renderRightSegment = useCallback(() => {
    if (!authLoaded) {
      return <></>;
    }
    return <div>{!user ? <Authen /> : <Profile />}</div>;
  }, [user, authLoaded]);

  return (
    <div className="sticky top-0 backdrop-blur-xl bg-white w-full md:h-[74px] h-[62px] z-10 pt-[5px] md:px-[20px] px-[10px] flex flex-row justify-between items-center">
      {_renderLeftSegment()}
      {_renderRightSegment()}
    </div>
  );
};

export default React.memo(Header);

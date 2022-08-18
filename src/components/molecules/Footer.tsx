import React from "react";
import Title from "@/components/atoms/Title";

const Footer: React.FC = () => {
  return (
    <div className="my-[50px]">
      <Title className="text-center text-copyright" type="h3">
        &copy; {new Date().getFullYear()} Rvideos. Powered by Linh Ho
      </Title>
    </div>
  );
};

export default React.memo(Footer);

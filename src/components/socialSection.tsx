import React from "react";
import insta from "./../assets/images/insta.svg";
import linkedin from "./../assets/images/lk.svg";
import face from "./../assets/images/fb.svg";

const SocialSection = () => {
  return (
    <div className="w-full m-auto flex flex-col gap-14 px-11 pb-24">
      <h2 className="font-title text-center text-3xl lg:text-4xl">
        Acompanhe nossas redes sociais
      </h2>
      <div className="flex w-full max-w-sm m-auto items-center justify-between ">
        <img src={insta} alt="instagram" />
        <img src={linkedin} alt="linkedin" />
        <img src={face} alt="facebook" />
      </div>
    </div>
  );
};

export default SocialSection;

import React from "react";
import yellowArch from "./../assets/images/yellow-arch.png";
import grayArch from "./../assets/images/gray-arch.png";
import redArch from "./../assets/images/red-arch.png";

const ClubSectionHome = () => {
  return (
    <div className="h-full w-full xl:h-screen bg-white flex items-center gap-16 m-auto justify-center flex-col max-w-4xl py-16 px-11">
      <h2 className="font-title lg:text-5xl text-4xl py-11  text-center w-full">
        {" "}
        O Clube Transatlântico é a ponte entre o Brasil e a Europa
      </h2>
      <p className="font-body lg:text-3xl text-xl text-center w-full ">
        Reunimos pessoas por meio de uma agenda cultural e social, contribuindo
        para o debate de ideias e promovendo a integração entre países.
      </p>
      <div className="flex items-center justify-center overflow-hidden">
        <img src={yellowArch} alt="" />
        <img src={grayArch} alt="" />
        <img src={redArch} alt="" />
        <img src={yellowArch} alt="" />
        <img src={grayArch} alt="" />
      </div>
    </div>
    // className="lg:block hidden"
  );
};

export default ClubSectionHome;

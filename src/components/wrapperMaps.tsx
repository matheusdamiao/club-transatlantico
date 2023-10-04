import React from "react";

const WrapperMaps = () => {
  return (
    <div className="">
      <iframe
        id="gmap_canvas"
        className="h-96 lg:h-[600px] lg:w-[600px] sm:h-[500px] sm:w-80 m-auto lg:m-0 w-full"
        src="https://maps.google.com/maps?q=Av.%20Cec%C3%ADlia%20Lottenberg,%20130%20-%20Ch%C3%A1cara%20Santo%20Ant%C3%B4nio,%20S%C3%A3o%20Paulo&t=&z=17&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </div>
  );
};

export default WrapperMaps;

import React from "react";

import loader from "../../public/images/loader.svg";

import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <Image
        className="w-[100px] h-[100px] object-contain"
        src={loader}
        alt="Loader"
      />
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">
        In progress <br /> Please wait...
      </p>
    </div>
  );
};

export default Loader;

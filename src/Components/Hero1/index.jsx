import React from "react";

const index = () => {
  return (
    <div className=" bg-black flex lg:flex-row md:flex-col  pt-[140px] h-[1200px] ">
      <div className="w-[70%] pl-12">
        <div className=" text-white">
          <h1 className="text-9xl">True version control for Sketch files</h1>
        </div>
        <div className="pt-9 flex flex-wrap gap-12 pl-9">
          <button className="bg-blue-600 rounded-md text-2xl p-4 w-40 font-semibold text-white">
            Start
          </button>
          <button className="text-white p-4 w-40 font-semibold text-2xl rounded-md border">
            Download
          </button>
        </div>
      </div>

      <div className="z-10 absolute ml-12  right-[-85%]  h-auto overflow-hidden scroll  ">
        <img
          src="https://assets-global.website-files.com/5ff3926f03b3ba26b7d639cb/61d4c6c484f03083032e8fe4_Branches_Hero2022.png"
          alt=""
          className="w-[50%]"
        />
      </div>
    </div>
  );
};

export default index;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-3 flex justify-between align-center">
      <div className=" pr-16  pl-16 p-3">
        <Link to="/">
          <img
            src="https://assets-global.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg"
            alt="header_logo"
            className=" h-[50px] w-[140px]"
          />
        </Link>
      </div>
      <div className=" pr-24 pl-16 mt-3 p-3">
        <Link to="/signin" className="text-lg text-blue-500 font-semibold">
          <p>Sign in</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

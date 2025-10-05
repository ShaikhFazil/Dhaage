import React from 'react';
import { Menu } from 'lucide-react';
import Logo from "../assets/logo2.png";

const Header = () => {
  return (
    <div className="relative lg:pb-10">
      <div className="flex flex-row gap-2 p-5 items-center">
        {/* <div className="flex items-center text-center">
          <Menu size={19} />
        </div> */}
        {/* <div className="font-playfair font-normal lg:text-2xl text-[#C3AF69]">
          M E N U
        </div> */}
      </div>

      <div className="absolute left-1/2 lg:-top-13 -top-4 transform -translate-x-1/2 z-50">
        <img
          src={Logo}
          alt="logo"
          className="w-70 sm:w-56 md:w-120 h-auto"
        />
      </div>
    </div>
  );
};

export default Header;

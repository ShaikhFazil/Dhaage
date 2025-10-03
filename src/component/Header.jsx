import React from 'react';
import { Menu } from 'lucide-react';
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="relative">
      <div className="flex flex-row gap-2 p-5 items-center">
        <div className="flex items-center text-center">
          <Menu size={19} />
        </div>
        <div className="font-playfair font-normal lg:text-2xl text-[#C3AF69]">
          M E N U
        </div>
      </div>

      <div className="absolute left-1/2 lg:top-0 top-10 transform -translate-x-1/2 z-50">
        <img
          src={Logo}
          alt="logo"
          className="w-40 sm:w-56 md:w-80 h-auto"
        />
      </div>
    </div>
  );
};

export default Header;

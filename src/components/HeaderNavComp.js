import React from 'react';
import { Link } from 'react-scroll';

export const HeaderNavComp = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="flex justify-center col-span-1 p-5 items-center">
        <div>
          <p className="text-3xl font-bold text-white">Arman Gostar Tose</p>
          <p className="text-sm text-white text-center">BUDGET</p>
        </div>
      </div>
      <div className="col-span-3 p-5 flex justify-end	 items-center mr-5">
        <Link to="ABOUT US" smooth={true} duration={500} className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
            <p className="text-white">HOME</p>
          </div>
        </Link>
        <Link to="ABOUT US" smooth={true} duration={500} className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
            <p className="text-white">ABOUT US</p>
          </div>
        </Link>
        <Link to="BOOKING TERMS" smooth={true} duration={500} className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
            <p className="text-white">BOOKING TERMS</p>
          </div>
        </Link>
        <Link to="FLIGHT" smooth={true} duration={500} className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
            <p className="text-white">FLIGHT</p>
          </div>
        </Link>
        <Link to="CONTACT" smooth={true} duration={500} className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
            <p className="text-white">Contact</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

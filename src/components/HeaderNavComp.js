import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const HeaderNavComp = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        <div className="flex justify-center col-span-1 p-5 items-center">
          <div>
            <p className="text-3xl font-bold text-black">Arman Gostar Tose</p>
            <p className="text-sm text-black text-center">BUDGET</p>
          </div>
        </div>
        <div className="col-span-3 p-5 flex justify-end	 items-center mr-5">
          <NavLink to="/" className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
            <p className="text-black">HOME</p>
          </NavLink>
          <Link to="ABOUT US" smooth={true} duration={500} className="ml-5">
            <div className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
              <p className="text-black">ABOUT US</p>
            </div>
          </Link>
          <NavLink to="/building" className="ml-5">
            <div className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
              <p className="text-black">Building</p>
            </div>
          </NavLink>
          <NavLink to="/environment" className="ml-5">
            <div className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
              <p className="text-black">Environment</p>
            </div>
          </NavLink>
          <NavLink to="/medicine" className="ml-5">
            <div className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
              <p className="text-black">Medicine</p>
            </div>
          </NavLink>
          <NavLink to="/transportation" className="ml-5">
            <div className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
              <p className="text-black">Transportation</p>
            </div>
          </NavLink>
          <Link to="CONTACT" smooth={true} duration={500} className="ml-5">
            <div className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
              <p className="text-black">Contact</p>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { scrollToRef } from '../App';

export const HeaderNavComp = () => {
  const scrollToContainer = (container) => {
    scrollToRef.current[container].scrollIntoView({ behavior: 'smooth' });
  };

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
          <button onClick={() => scrollToContainer('project')} className="ml-5">
            <div className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
              <p className="text-black">Projects</p>
            </div>
          </button>
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
          <button onClick={() => scrollToContainer('contact')} className="ml-5">
            <div className="hover:border-b-[2px] hover:border-b-yellow-400 hover:text-xl pb-2">
              <p className="text-black">Contact</p>
            </div>
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

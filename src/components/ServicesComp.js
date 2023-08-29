import React from 'react';
import { Aims } from '../constants/Data';
export const ServicesComp = () => {
  return (
    <div className="h-[80%] px-20 py-20">
      <div className="grid grid-cols-2 gap-2 h-[90%]">
        <div>
          <p className="text-sm">BEST CHOICE</p>
          <p className="text-3xl mt-1">
            Why Should<br></br>You Use
            <span className="text-[#3781c5]">
              {' '}
              Our <br></br>Services
            </span>
          </p>
          <div className="mt-5">
            <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
              <img src={Aims[0].icon} className="w-[40px] h-[40px]" />
            </div>
            <p className="text-black text-lg mt-2">{Aims[0].heading}</p>
            <div className="w-[200px] mt-1">
              <p className="text-sm text-gray-400">{Aims[0].description}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="mt-5">
              <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                <img src={Aims[1].icon} className="w-[40px] h-[40px]" />
              </div>
              <p className="text-black text-lg mt-2">{Aims[1].heading}</p>
              <div className="w-[200px] mt-1">
                <p className="text-sm text-gray-400">{Aims[1].description}</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                <img src={Aims[2].icon} className="w-[40px] h-[40px]" />
              </div>
              <p className="text-black text-lg mt-2">{Aims[2].heading}</p>
              <div className="w-[200px] mt-1">
                <p className="text-sm text-gray-400">{Aims[2].description}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mt-5">
              <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                <img src={Aims[3].icon} className="w-[40px] h-[40px]" />
              </div>
              <p className="text-black text-lg mt-2">{Aims[3].heading}</p>
              <div className="w-[200px] mt-1">
                <p className="text-sm text-gray-400">{Aims[3].description}</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                <img src={Aims[4].icon} className="w-[40px] h-[40px]" />
              </div>
              <p className="text-black text-lg mt-2">{Aims[4].heading}</p>
              <div className="w-[200px] mt-1">
                <p className="text-sm text-gray-400">{Aims[4].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

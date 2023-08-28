import React from 'react';
import { LOWEST_FARE_LIST } from '../constants/Data';
import { ButtonYellowComp } from './ButtonYellowComp';
import { useLocation } from 'react-router-dom';
export const LowestFareComp = () => {
  const location = useLocation();
  const projects = LOWEST_FARE_LIST.filter((item) => item.root === location.pathname);
  console.log(projects);
  return (
    <div className="relative h-[65%] px-20 py-20 bg-[#1a63a8]">
      <p className="text-sm text-center text-white">CURRENT FARE</p>
      <p className="text-3xl mt-1 text-center text-white">Today's Lowest Fare</p>
      <div className="flex absolute bottom-[-85px] ml-[39%]">
        {projects.map((item) => {
          return (
            <div key={`lowest-fare-${item.id}`} className="bg-white px-5 py-5 text-center mr-5 rounded-lg shadow-md">
              <img src={item.image} className="h-[150px] w-[150px] rounded-lg" />
              <p className="mt-2 font-semibold">{item.heading}</p>
              <p className="text-sm">
                <span className="text-gray-400">{item.describtion}</span>
              </p>
              <ButtonYellowComp label={'CHECK OUT NOW'} extraStyle={'mt-5'} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React from 'react';
import { ButtonYellowComp } from './ButtonYellowComp';
import FlyImage from '../assets/fly.jpeg';
// import { Contents } from '../constants/Data';
// import { useLocation } from 'react-router-dom';

export const ProfessionalExpComp = () => {
  // const location = useLocation();
  // const Text = Contents.find((item) => item.root === location.pathname);
  return (
    <div className="h-[80%] px-20 py-[140px]">
      <div className="grid grid-cols-2 gap-5 h-[90%]">
        <div className="flex justify-center">
          <div
            className="bg-contain w-[250px]"
            style={{
              backgroundImage: `url("${FlyImage}")`,
            }}
          ></div>
        </div>
        <div>
          <div>
            <div>
              <p className="text-sm">BEST CHOICE</p>
              <p className="text-3xl mt-1">
                We Are Very Reliable<br></br>
                <span className="text-[#3781c5]"> and profecional</span>
              </p>
            </div>
          </div>

          <p className="mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
          </p>
          <p className="mt-5">
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem Ipsum.
          </p>
          <div className="flex">
            <ButtonYellowComp label={'Read More'} extraStyle={'mt-10'} />
          </div>
        </div>
      </div>
    </div>
  );
};

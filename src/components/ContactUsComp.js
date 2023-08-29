import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

export const ContactUsComp = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex justify-center h-14">
        <div className="flex items-center">
          <BiPhoneCall size={20} />
          <p className="text-sm ml-2">+98 88 93 45 53</p>
          <MdEmail size={20} className="ml-5" />
          <a href="mailto:mohisadeghi302@gmail.com" className="text-sm ml-2">
            Email Us!
          </a>
        </div>
      </div>
      <div className="flex justify-center h-14 items-center">
        <a href="#">
          <BsFacebook size={20} />
        </a>
        <a href="#">
          {' '}
          <AiFillTwitterCircle size={20} className="ml-2" />
        </a>
        <a href="#">
          {' '}
          <AiFillInstagram size={20} className="ml-2" />
        </a>
        <a href="#">
          {' '}
          <AiFillLinkedin size={20} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

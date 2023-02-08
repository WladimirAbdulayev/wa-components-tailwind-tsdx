/// <reference path="my.d.ts" />
import React, { FC } from 'react';
import { IKECardProps } from './types';
// import admin from './assets/admin.png';
import { KELogo } from './svg/KELogo';

export const KELogoCard: FC<IKECardProps> = ({
  children,
  label = 'logo card',
  text,
}) => {
  return (
    <div className="flex items-center justify-center w-1/3 m-auto text-2xl text-center bg-primary uppercase text-secondary shadow-xl rounded-full">
      {children || `KE Component Library`}
      <div className="bg-white rounded-2xl text-primary m-3 p-3">
        {/* <img src={admin} alt="logo" /> */}
        <KELogo></KELogo>
        <h2>{label}</h2>
        <div>{text}</div>
      </div>
    </div>
  );
};

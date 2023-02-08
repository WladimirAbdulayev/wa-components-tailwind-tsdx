/// <reference path="my.d.ts" />
import React, { FC } from 'react';
import { IKELogoButtonProps } from './types';
// import logo from './assets/logo.svg';
import { KELogo } from './svg/KELogo';

export const KELogoButton: FC<IKELogoButtonProps> = ({
  children,
  label = 'our card',
  variant = 'default',
}) => {
  return (
    <div
      className={`flex items-center justify-center w-1/3 m-auto text-2xl text-center bg-primary uppercase text-white shadow-xl rounded-full
    ${variant === 'default' ? 'bg-primary' : 'bg-secondary'}`}
    >
      {children || `KE Component Library`}
      <div className="bg-white rounded-2xl text-secondary m-3 p-3">
        {/* <img src={logo} alt="logo" /> */}
        <KELogo></KELogo>
        <h2>{label}</h2>
        <div>{variant}</div>
      </div>
    </div>
  );
};

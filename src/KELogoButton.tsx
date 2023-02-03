/// <reference path="my.d.ts" />
import React, { FC } from 'react';
import { IKELogoButtonProps } from './types';
import logo from './assets/logo.svg';

export const KELogoButton: FC<IKELogoButtonProps> = ({
  children,
  label = 'our card',
  text,
}) => {
  return (
    <div className="flex items-center justify-center w-1/3 m-auto text-2xl text-center bg-primary uppercase text-secondary shadow-xl rounded-full">
      {children || `KE Component Library`}
      <div className="bg-white rounded-2xl text-secondary m-3 p-3">
        <img src={logo} alt="logo" />
        <h2>{label}</h2>
        <div>{text}</div>
      </div>
    </div>
  );
};

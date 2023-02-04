import React, { FC } from 'react';
import { IKEButtonProps } from './types';

export const KEButton: FC<IKEButtonProps> = ({
  text = 'Get Started',
  variant = 'default',
}) => {
  return (
    <button
      className={`flex items-center justify-center w-1/3 m-auto text-2xl text-center bg-primary uppercase text-secondary shadow-xl rounded-full hover:bg-gray-900
      s}`}
    >
      <div className="bg-secondary rounded-2xl text-white m-3 p-3">
        <h2 className="text-sm text-left">{variant}</h2>
        <div>{text}</div>
      </div>
    </button>
  );
};

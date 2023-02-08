import React, { FC } from 'react';
import { IKEButtonProps } from './types';

const statusToClassMap: { [key: string]: string } = {
  default: 'bg-primary',
  success: 'bg-green-400',
  info: 'bg-secondary',
  warning: 'bg-yellow-400',
  error: 'bg-red-400',
};

export const KEButton: FC<IKEButtonProps> = ({
  text = 'Get Started',
  variant = 'default',
}) => {
  return (
    <button
      className={`flex items-center justify-center w-1/4 m-auto text-2xl text-center
      uppercase text-secondary shadow-xl rounded-2xl hover:bg-gray-900
       ${statusToClassMap[variant]}
       `}
    >
      <div className="rounded-xl text-white m-3 p-3">
        <h2 className="text-sm text-left">{variant}</h2>
        <div>{text}</div>
      </div>
    </button>
  );
};

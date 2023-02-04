import React, { FC } from 'react';
import { IKECardProps } from './types';

export const KECard: FC<IKECardProps> = ({
  children,
  label = 'our card',
  text,
}) => {
  return (
    <div className="flex items-center justify-center w-1/3 m-auto text-2xl text-center bg-primary uppercase text-secondary shadow-xl rounded-full">
      {children || `KE Component Library`}
      <div className="bg-secondary rounded-2xl text-white m-3 p-3">
        <h2>{label}</h2>
        <div>{text}</div>
      </div>
    </div>
  );
};

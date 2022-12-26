import React, { FC, ReactChild } from 'react';

export interface CardProps  {
  children?: ReactChild;
  label?: string;
  text: string;
}

export const KECard: FC<CardProps> = ({
  children,
  label = 'our card',
  text,
}) => {
  return (
    <div className="flex items-center justify-center w-5/6 m-auto text-2xl text-center text-pink-700 uppercase bg-yellow-400 shadow-xl rounded-3xl">
    {children || `KE Component Library`}
    <div className="bg-red-900  text-white m-3 p-3">
      <h2>{label}</h2>
      <div>{text}</div>
    </div>
  </div>
  );
};

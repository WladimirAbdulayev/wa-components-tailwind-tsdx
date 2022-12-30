import React, { FC, ButtonHTMLAttributes } from 'react';

type ButtonVariants = 'default' | 'warning' | 'info';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariants;
}

export const KEButton: FC<ButtonProps> = ({
  text = 'Get Started',
  variant = 'default',
}) => {
  return (
    <button
      className={`flex items-center justify-center w-1/3 m-auto text-2xl text-center bg-primary uppercase text-secondary shadow-xl rounded-full hover:bg-gray-900
      ${variant === 'default' ? 'bg-primary' : ' bg-secondary'}`}
    >
      <div className="bg-secondary rounded-2xl text-white m-3 p-3">
        <h2 className="text-sm text-left">{variant}</h2>
        <div>{text}</div>
      </div>
    </button>
  );
};

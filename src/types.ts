import { ButtonHTMLAttributes, ReactChild } from 'react';

export type KEButtonVariants =
  | 'default'
  | 'success'
  | 'info'
  | 'warning'
  | 'error';

export type KECalendarDatum = {
  day: string;
  value: number;
};

export type KECalendarTooltipProps = {
  value: string;
  day: string;
  color: string;
};

export interface IKEButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: KEButtonVariants;
}

export interface IKELogoButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  label: string;
  variant?: KEButtonVariants;
}

export interface IKECardProps {
  children?: ReactChild;
  label?: string;
  text: string;
}

export interface IKELogoCardProps {
  children?: ReactChild;
  label?: string;
  text: string;
}

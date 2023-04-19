import React from 'react';

const colorOptions = {
  gray: 'bg-gray-400 text-gray-800',
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  green: 'bg-green-100 text-green-800',
  emerald: 'bg-emerald-400 text-emerald-800',
  blue: 'bg-blue-100 text-blue-800',
  sky: 'bg-sky-100 text-sky-800',
  indigo: 'bg-indigo-100 text-indigo-800',
  purple: 'bg-purple-100 text-purple-800',
  pink: 'bg-pink-100 text-pink-800',
};
const sizeOptions = {
  sm: 'text-xs',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-2xl',
};

const fontWeightOptions = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

export interface BadgeProps {
  message: string;
  color?: keyof typeof colorOptions;
  size?: keyof typeof sizeOptions;
  fontWeight?: keyof typeof fontWeightOptions;
}

export default function Badge({
  message,
  color = 'gray',
  size = 'md',
  fontWeight = 'bold',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex px-2.5 py-0.5 items-center rounded-full ${colorOptions[color]} ${sizeOptions[size]} ${fontWeightOptions[fontWeight]}`}
    >
      {message}
    </span>
  );
}

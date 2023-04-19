import React from 'react';

const Width = {
  sm: 'w-1/4',
  md: 'w-1/3',
  lg: 'w-1/2',
  xl: 'w-full',
  none: '',
};

const TextColor = {
  sky: 'text-sky-600',
  gray: 'text-gray-600',
  blue: 'text-blue-600',
  red: 'text-red-600',
  yellow: 'text-yellow-600',
  green: 'text-green-600',
  purple: 'text-purple-600',
  pink: 'text-pink-600',
  indigo: 'text-indigo-600',
};
const BackgroundColor = {
  sky: 'bg-sky-50',
  gray: 'bg-gray-50',
  blue: 'bg-blue-50',
  red: 'bg-red-50',
  yellow: 'bg-yellow-50',
  green: 'bg-green-50',
  purple: 'bg-purple-50',
  pink: 'bg-pink-50',
  indigo: 'bg-indigo-50',
};
const HoverBackgroundColor = {
  sky: 'hover:bg-sky-100',
  gray: 'hover:bg-gray-100',
  blue: 'hover:bg-blue-100',
  red: 'hover:bg-red-100',
  yellow: 'hover:bg-yellow-100',
  green: 'hover:bg-green-100',
  purple: 'hover:bg-purple-100',
  pink: 'hover:bg-pink-100',
  indigo: 'hover:bg-indigo-100',
};

const Shadow = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  none: '',
};

const Rounded = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  none: '',
};

type HoverBackgroundColorType = typeof HoverBackgroundColor;
type BackgroundColorType = typeof BackgroundColor;
type TextColorType = typeof TextColor;
type WidthType = typeof Width;
type ShadowType = typeof Shadow;
type RoundedType = typeof Rounded;

export interface ButtonProps {
  width: keyof WidthType;
  textColor: keyof TextColorType;
  backgroundColor: keyof BackgroundColorType;
  hoverBackgroundColor: keyof HoverBackgroundColorType;
  shadow: keyof ShadowType;
  rounded: keyof RoundedType;
  label?: string;
  onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    width,
    textColor,
    backgroundColor,
    hoverBackgroundColor,
    shadow,
    rounded,
    label,
    onClick,
  }: ButtonProps,
  ref,
) {
  const [
    setWidth,
    setTextColor,
    setBackgroundColor,
    setHoverBackgroundColor,
    setShadow,
    setRounded,
  ] = [
    Width[width],
    TextColor[textColor],
    BackgroundColor[backgroundColor],
    HoverBackgroundColor[hoverBackgroundColor],
    Shadow[shadow],
    Rounded[rounded],
  ];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`block ${setWidth} px-5 py-3 text-center rounded-md font-medium ${setShadow} ${setRounded} ${setTextColor} ${setBackgroundColor} ${setHoverBackgroundColor}`}
      ref={ref}
    >
      {label}
    </button>
  );
});

export default Button;

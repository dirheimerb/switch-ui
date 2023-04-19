import React from 'react';
import clsx from 'clsx';

export enum Size {
  Small = 'text-sm',
  Medium = 'text-base',
  Large = 'text-lg',
}

export enum Color {
  Emerald = 'bg-emerald-100 text-emerald-800',
  Sky = 'bg-sky-100 text-sky-800',
  Amber = 'bg-amber-100 text-amber-800',
  Rose = 'bg-rose-100 text-rose-800',
  Zinc = 'bg-zinc-100 text-zinc-800',
  Blue = 'bg-blue-100 text-blue-800',
}

export interface TagProps {
  tagText: string;
  size: Size;
  color: Color;
}

export default function Tag({
  tagText = 'Tag',
  size = Size.Medium,
  color = Color.Emerald,
}: TagProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2.5 py-0.5 font-medium ',
        color,
        size,
      )}
    >
      {tagText}
    </span>
  );
}

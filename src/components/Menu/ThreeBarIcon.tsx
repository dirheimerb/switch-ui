import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Width = {
  sm: 'w-6',
  md: 'w-8',
  lg: 'w-12',
  xl: 'w-16',
  none: '',
};
const Height = {
  sm: 'h-6',
  md: 'h-8',
  lg: 'h-12',
  xl: 'h-16',
  none: '',
};

const Color = {
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

type ColorType = typeof Color;
type WidthType = typeof Width;
type HeightType = typeof Height;
export interface ThreeBarIconProps {
  open: boolean;
  handleOpenClick: () => void;
  links: {
    href: string;
    label: string;
  }[];
  children: React.ReactNode;
  color?: keyof ColorType;
  width?: keyof WidthType;
  height?: keyof HeightType;
  className?: string;
}

const activeLinkClass = 'bg-gray-100 text-gray-900';
const inactiveLinkClass = 'text-gray-700 hover:bg-gray-50 hover:text-gray-900';

const ThreeBarIcon = React.forwardRef<HTMLButtonElement, ThreeBarIconProps>(
  function ThreeBarIcon(
    {
      open = false,
      handleOpenClick,
      links,
      children,
      color = 'gray',
      width = 'sm',
      height = 'sm',
      className = '',
    }: ThreeBarIconProps,
    ref,
  ) {
    const [setWidth, setColor, setHeight] = [
      Width[width],
      Color[color],
      Height[height],
    ];
    const [setOpen, setOpenClick] = [open, handleOpenClick];
    const router = useRouter();

    const pathname = router.pathname;
    const pathRef = React.useRef<HTMLAnchorElement>(null);
    const paths = links.filter((link) => link.href === pathname);

    React.useEffect(() => {
      if (pathRef.current) {
        pathRef.current.focus();
      }
    }, [pathname]);

    return (
      <>
        <button
          type="button"
          className={`inline-flex ${width} ${height} justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
          onClick={setOpenClick}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          ref={ref}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${setColor} w-6 h-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${setColor} w-6 h-6`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
        {setOpen ? (
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </>
    );
  },
);

export default ThreeBarIcon;

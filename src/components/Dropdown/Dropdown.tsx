import React from 'react';
import useBoolean from '../../hooks/use-boolean';
import Link from 'next/link';

export interface DropdownProps {
  menuItems: {
    label: string;
    href: string;
  }[];
  buttonOpenLabel: string | React.ReactElement;
  buttonCloseLabel: string | React.ReactElement;
}

export default function Dropdown({
  menuItems,
  buttonCloseLabel,
  buttonOpenLabel,
}: DropdownProps) {
  const { open, handleOpenClick } = useBoolean();
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (open && buttonRef.current) {
      buttonRef.current.classList.add(
        'transition',
        'duration-200',
        'ease-in-out',
        'transform',
        'opacity-100',
        'scale-100',
      );
    } else if (buttonRef.current) {
      buttonRef.current.classList.remove(
        'transition',
        'duration-200',
        'ease-in-out',
        'transform',
        'opacity-100',
        'scale-100',
      );
    }
  }, [open]);
  return (
    <div className="relative inline-block text-left m-2">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleOpenClick}
          ref={buttonRef}
        >
          {open ? buttonCloseLabel : buttonOpenLabel}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {open ? (
        <div
          className="absolute right-0 z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

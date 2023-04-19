import Header from './header';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navbar.module.css';
import AuthButton from '../Buttons/AuthButton';
import React from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const router = useRouter();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Header
        title="Schedulify"
        description="an app to handle your schedule"
        favicon="/favicon.ico"
      />
      <nav className="h-16 bg-slate-500">
        <button
          type="button"
          className="text-slate-100 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-opacity-50"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {showMenu && (
          <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full p-4 bg-slate-500 md:hidden">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Link
                href="/"
                className="text-2xl font-bold text-slate-100 hover:text-slate-200"
              >
                Schedulify
              </Link>

              <AuthButton
                width={'xl'}
                textColor={'sky'}
                backgroundColor={'gray'}
                hoverBackgroundColor={'blue'}
                shadow={'none'}
                rounded={'md'}
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

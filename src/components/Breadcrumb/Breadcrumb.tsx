import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavigationLinks } from '@/lib/config';

export interface BreadcrumbProps {
  routes: {
    label: string;
    href: string;
    current?: boolean;
  }[];
}

export default function BreadCrumb({ routes }: BreadcrumbProps) {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol
        role="list"
        className="flex space-x-4 w-full max-w-screen-xl rounded-md bg-white shadow px-6 lg:px-8 dark:bg-gray-800 dark:text-slate-100"
      >
        <li className="flex">
          <div className="flex items-center">
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <svg
                className="h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {routes.map((path, index) => {
          const isLastItem = index === routes.length - 1;
          if (!isLastItem) {
            return (
              <li className="flex" key={index}>
                <div className="flex items-center">
                  <svg
                    className="h-full w-6 flex-shrink-0 text-gray-200"
                    viewBox="0 0 24 44"
                    preserveAspectRatio="none"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                  </svg>
                  <Link
                    href={path.href}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    {' '}
                    {path.label}
                    <span className="sr-only">{path.label}</span>
                  </Link>
                </div>
              </li>
            );
          } else {
            return path.label;
          }
        })}
      </ol>
    </nav>
  );
}

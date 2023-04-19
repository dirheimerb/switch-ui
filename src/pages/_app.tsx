import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/Header/Navbar';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

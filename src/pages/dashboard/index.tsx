import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { GetServerSidePropsContext } from 'next';

export default function Dashboard() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

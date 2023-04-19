import Head from 'next/head';

export interface HeaderProps {
  title: string;
  description: string;
  favicon: string;
}
export default function Header({ title, description, favicon }: HeaderProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} />
    </Head>
  );
}

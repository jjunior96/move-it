import Head from 'next/head';
import Dashboard from 'templates/Dashboard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Move it</title>
      </Head>
      <Dashboard />
    </>
  );
}

import Head from 'next/head';
import { GetServerSideProps } from 'next';

import Dashboard from 'templates/Dashboard';
import { ChallengesProvider } from 'contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentXP: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentXP={props.currentXP}
      challengesCompleted={props.challengesCompleted}
    >
      <Head>
        <title>Home | Move it</title>
      </Head>
      <Dashboard />
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentXP, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentXP: Number(currentXP),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};

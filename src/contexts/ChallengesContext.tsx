import { createContext, useState, ReactNode } from 'react';

import challenges from '../../challenges.json';

interface Challenge {
  type: string;
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentXP: number;
  challengesCompleted: number;
  activeChallenge: Challenge | null;
  xpToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

type ChallengesProviderProps = {
  children: ReactNode;
};

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentXP, setCurrentXP] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(
    null
  );

  const xpToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    // eslint-disable-next-line prefer-const
    let finalXP = currentXP + amount;

    if (finalXP >= xpToNextLevel) {
      finalXP = finalXP - xpToNextLevel;
      levelUp();
    }

    setCurrentXP(finalXP);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentXP,
        challengesCompleted,
        activeChallenge,
        xpToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

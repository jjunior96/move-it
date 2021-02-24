import { useContext } from 'react';

import { ChallengesContext } from 'contexts/ChallengesContext';

import * as S from './styles';

const ExperienceBar = () => {
  const { currentXP, xpToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentXP * 100) / xpToNextLevel);

  return (
    <S.Container>
      <S.TextXp>0 XP</S.TextXp>
      <S.BarContainer>
        <S.BarXp style={{ width: `${percentToNextLevel}%` }}></S.BarXp>
        <S.CurrentXp style={{ left: `${percentToNextLevel}%` }}>
          {currentXP} XP
        </S.CurrentXp>
      </S.BarContainer>
      <S.TextXp>{xpToNextLevel} XP</S.TextXp>
    </S.Container>
  );
};

export default ExperienceBar;

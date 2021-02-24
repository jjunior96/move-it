import { ChallengesContext } from 'contexts/ChallengesContext';
import { useContext } from 'react';
import * as S from './styles';

const CompleteChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <S.Container>
      <S.Info>
        <S.TitleChallenges>Desafios completos</S.TitleChallenges>
        <S.NumberChallenges>{challengesCompleted}</S.NumberChallenges>
      </S.Info>
      <S.BarChallenges />
    </S.Container>
  );
};

export default CompleteChallenges;

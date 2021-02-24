import { useContext } from 'react';
import Image from 'next/image';

import { ChallengesContext } from 'contexts/ChallengesContext';
import Button from 'components/Button';

import * as S from './styles';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <S.Container>
      {activeChallenge ? (
        <S.Active>
          <S.ActiveHeader>Ganhe {activeChallenge.amount} XP</S.ActiveHeader>

          <S.ActiveMain>
            <Image
              src={`/icons/${activeChallenge.type}.svg`}
              alt="Level Up"
              width={100}
              height={100}
            />
            <S.Title>Novo desafio</S.Title>
            <S.Text>{activeChallenge.description}</S.Text>
          </S.ActiveMain>

          <S.ActiveFooter>
            <Button type="button" isFailed={true} onClick={resetChallenge}>
              Falhei
            </Button>
            <Button
              type="button"
              isSucceeded={true}
              onClick={() => console.log()}
            >
              Completei
            </Button>
          </S.ActiveFooter>
        </S.Active>
      ) : (
        <S.NotActive>
          <S.Title>Finalize um ciclo para receber um desafio.</S.Title>
          <S.Text>
            <Image
              src="/icons/level-up.svg"
              alt="Level Up"
              width={100}
              height={100}
            />
            Avance de level completando desafios.
          </S.Text>
        </S.NotActive>
      )}
    </S.Container>
  );
};

export default ChallengeBox;

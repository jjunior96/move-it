import { useState } from 'react';
import Image from 'next/image';

import * as S from './styles';
import Button from 'components/Button';

const ChallengeBox = () => {
  const [hasActiveChallenge, setHasActiveChallenge] = useState(true);

  return (
    <S.Container>
      {hasActiveChallenge ? (
        <S.Active>
          <S.ActiveHeader>Ganhe 400 xp</S.ActiveHeader>

          <S.ActiveMain>
            <Image
              src="/icons/body.svg"
              alt="Level Up"
              width={100}
              height={100}
            />
            <S.Title>Novo desafio</S.Title>
            <S.Text>Levante e faça uma caminhada de 3 minutos.</S.Text>
          </S.ActiveMain>

          <S.ActiveFooter>
            <Button type="button" isFailed={true} onClick={() => console.log()}>
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

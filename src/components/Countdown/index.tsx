import { useContext } from 'react';

import { CountdownContext } from 'contexts/CountdownContext';
import Button from 'components/Button';
import * as S from './styles';

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    starCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.Number>{minuteLeft}</S.Number>
          <S.Number>{minuteRight}</S.Number>
        </S.Content>

        <S.Separator>:</S.Separator>

        <S.Content>
          <S.Number>{secondLeft}</S.Number>
          <S.Number>{secondRight}</S.Number>
        </S.Content>
      </S.Container>

      {hasFinished ? (
        <Button disabled isActive={false}>
          Ciclo encerrado
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button type="button" isActive={isActive} onClick={resetCountdown}>
              Abandonar ciclo
            </Button>
          ) : (
            <Button type="button" isActive={isActive} onClick={starCountdown}>
              Iniciar um ciclo
            </Button>
          )}
        </>
      )}
    </S.Wrapper>
  );
};

export default Countdown;

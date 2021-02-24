import { useCallback, useState, useEffect, useContext } from 'react';

import { ChallengesContext } from 'contexts/ChallengesContext';
import Button from 'components/Button';
import * as S from './styles';

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const starCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, startNewChallenge, time]);

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

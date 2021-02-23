import { useCallback, useState, useEffect } from 'react';

import Button from 'components/Button';
import * as S from './styles';

const Countdown = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const starCountdown = useCallback(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

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
      <Button type="button" onClick={starCountdown}>
        Iniciar um ciclo
      </Button>
    </S.Wrapper>
  );
};

export default Countdown;

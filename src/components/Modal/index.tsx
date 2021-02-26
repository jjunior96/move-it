import { useContext } from 'react';

import { ChallengesContext } from 'contexts/ChallengesContext';

import * as S from './styles';

const Modal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <S.Overlay>
      <S.Container>
        <S.Header>{level}</S.Header>

        <S.Strong>Parabéns</S.Strong>
        <S.Text>Você alcançou um novo level.</S.Text>

        <S.CloseButton onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="fechar modal" />
        </S.CloseButton>
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;

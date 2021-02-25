import { useContext } from 'react';
import Image from 'next/image';

import { ChallengesContext } from 'contexts/ChallengesContext';

import * as S from './styles';

const Perfil = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <S.Container>
      <S.Photo src="https://github.com/jjunior96.png" alt="Junior Alves" />
      <S.Content>
        <S.Name>Junior Alves</S.Name>
        <S.LevelContainer>
          <Image
            src="/icons/level.svg"
            alt="icone de level"
            width={100}
            height={100}
          />
          <S.LevelText>Level {level}</S.LevelText>
        </S.LevelContainer>
      </S.Content>
    </S.Container>
  );
};

export default Perfil;

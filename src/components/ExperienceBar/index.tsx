import * as S from './styles';

const ExperienceBar = () => {
  return (
    <S.Container>
      <S.TextXp>0 px</S.TextXp>
      <S.BarContainer>
        <S.BarXp style={{ width: '50%' }}></S.BarXp>
        <S.CurrentXp style={{ left: '50%' }}>300 xp</S.CurrentXp>
      </S.BarContainer>
      <S.TextXp>600 px</S.TextXp>
    </S.Container>
  );
};

export default ExperienceBar;

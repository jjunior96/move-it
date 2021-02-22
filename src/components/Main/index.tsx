import * as S from './styles';

const Main: React.FC = ({ children }) => (
  <S.Container>
    <S.Content>{children}</S.Content>
  </S.Container>
);

export default Main;

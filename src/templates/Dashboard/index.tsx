import Profile from 'components/Profile';
import ExperienceBar from 'components/ExperienceBar';
import CompleteChallenges from 'components/CompleteChallenges';
import Countdown from 'components/Countdown';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <ExperienceBar />
      <S.Content>
        <S.ContentLeft>
          <Profile />
          <S.Line>
            <CompleteChallenges />
          </S.Line>

          <Countdown />
        </S.ContentLeft>

        <S.ContentRight>
          <S.ContentRightTitle>
            Inicie um ciclo para receber desafios
          </S.ContentRightTitle>
        </S.ContentRight>
      </S.Content>
    </S.Container>
  );
};

export default Dashboard;

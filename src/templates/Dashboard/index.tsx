import Profile from 'components/Profile';
import ExperienceBar from 'components/ExperienceBar';
import CompleteChallenges from 'components/CompleteChallenges';
import ChallengeBox from 'components/ChallengeBox';
import Countdown from 'components/Countdown';

import * as S from './styles';
import { CountdownContextProvider } from 'contexts/CountdownContext';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <ExperienceBar />
      <CountdownContextProvider>
        <S.Content>
          <S.ContentLeft>
            <Profile />
            <S.Line>
              <CompleteChallenges />
            </S.Line>

            <Countdown />
          </S.ContentLeft>

          <ChallengeBox />
        </S.Content>
      </CountdownContextProvider>
    </S.Container>
  );
};

export default Dashboard;

import ExperienceBar from 'components/ExperienceBar';
import Main from 'components/Main';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Main>
        <ExperienceBar />
      </Main>
    </Container>
  );
};

export default Dashboard;

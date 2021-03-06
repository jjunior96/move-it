import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2.4rem 2rem;
  margin: 0 auto;
`;

export const Content = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
  align-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 6rem;
    margin-top: 4rem;
  }
`;

export const ContentLeft = styled.div``;

export const Line = styled.div`
  width: 100%;
  margin: 5.6rem 0;

  &:last-child {
    margin-top: 5.6rem;
    margin-bottom: 0;
  }
`;

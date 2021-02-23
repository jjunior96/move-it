import styled, { css } from 'styled-components';

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

export const ContentRight = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    box-shadow: ${theme.box.shadow};
  `}
`;

export const ContentRightTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 3rem;
    max-width: 25rem;
    text-align: center;
  `}
`;

export const ContentRightText = styled.div``;

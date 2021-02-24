import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100%;

    background-color: ${theme.colors.white};
    border-radius: 6px;
    box-shadow: ${theme.box.shadow};
    padding: 2.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
  `}
`;

export const Active = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const ActiveHeader = styled.header`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    padding: 0 2rem 1.4rem;
    border-bottom: 1px solid ${theme.colors.grayLine};
  `}
`;

export const ActiveMain = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NotActive = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ActiveFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.semiBold};
    line-height: 3rem;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2rem;
    max-width: 70%;
    margin-top: ${theme.spacings.medium};

    img {
      margin: 1.4rem;
    }
  `}
`;

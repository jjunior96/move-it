import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 3.2rem;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.title};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: ${theme.colors.white};
    box-shadow: ${theme.box.shadow};
    border-radius: 6px;
    font-size: ${theme.font.sizes.xhuge};
  `}
`;

export const Number = styled.span`
  flex: 1;
  text-align: center;

  & + span {
    border-left: 2px solid #f0f1f3;
  }
`;

export const Separator = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    margin: 0 1rem;
  `}
`;

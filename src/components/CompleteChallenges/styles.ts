import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1.8rem;
`;

export const TitleChallenges = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.text};
  `}
`;

export const NumberChallenges = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.text};
  `}
`;

export const BarChallenges = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 0.2rem;
    background-color: ${theme.colors.grayLine};
  `}
`;

import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2.4rem 2rem;
`;

export const TextXp = styled.span`
  font-size: 1.6rem;
`;

export const BarContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background-color: ${theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;
  `}
`;

export const BarXp = styled.div`
  ${({ theme }) => css`
    height: 4px;
    border-radius: 4px;
    background-color: ${theme.colors.green};
  `}
`;

export const CurrentXp = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;

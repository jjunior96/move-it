import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
    border-radius: 6px;
    border: 0;
    padding: 0 1.6rem;
    width: 100%;
    color: #fff;
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.xlarge};
    height: 8rem;
    transition: background-color 0.4s;

    &:hover {
      background-color: ${shade(0.2, theme.colors.blue)};
    }
  `}
`;

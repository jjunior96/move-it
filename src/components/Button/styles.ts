import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isActive: boolean;
  isFailed: boolean;
  isSucceeded: boolean;
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, isActive, isFailed, isSucceeded, disabled }) => css`
    background: ${theme.colors.blue};
    border-radius: 6px;
    border: 0;
    padding: 0 1.6rem;
    width: 100%;
    color: #fff;
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.xlarge};
    height: 8rem;
    transition: background-color 0.2s, color 0.2s;

    &:not(:disabled):hover {
      background-color: ${shade(0.2, theme.colors.blue)};
    }

    ${isFailed &&
    css`
      background-color: ${theme.colors.red};
      color: ${theme.colors.white};
      height: 4.4rem;

      &:not(:disabled):hover {
        background-color: ${shade(0.2, theme.colors.red)};
        color: ${theme.colors.white};
      }
    `}

    ${isSucceeded &&
    css`
      background-color: ${theme.colors.green};
      color: ${theme.colors.white};
      height: 4.4rem;

      &:not(:disabled):hover {
        background-color: ${shade(0.2, theme.colors.green)};
      }
    `}

    ${isActive &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.title};

      &:not(:disabled):hover {
        background-color: ${theme.colors.red};
        color: ${theme.colors.white};
      }
    `}

    ${disabled &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.text};
      cursor: not-allowed;
    `}
  `}
`;

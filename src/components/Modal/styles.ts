import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    max-width: 400px;
    padding: 2rem 2.4rem;
    border-radius: 6px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xhuge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.blue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  `}
`;

export const Strong = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.title};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.text};
    margin-top: 0.8;
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0.8rem;
  top: 0.8rem;
  background: transparent;
  border: 0;
  font-size: 0;
`;

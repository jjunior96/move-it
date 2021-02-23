import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Content = styled.div``;

export const Photo = styled.img`
  width: 8.8rem;
  height: 8.8rem;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 2rem;
`;

export const Name = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.title};
  `}
`;

export const LevelContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 1.4rem;
    height: 1.6rem;
  }
`;

export const LevelText = styled.p`
  margin-left: 0.8rem;
`;

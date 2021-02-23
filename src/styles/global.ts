import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%; // 1.6rem === 16px
    }

    @media (max-width: 1080px) {
      html {
        font-size: 58.59%; // 1rem === 15px
      }
    }

    @media (max-width: 720px) {
      html {
        font-size: 54.68%; // 1rem === 14px
      }
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      font-display: swap;
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
    }
  `}

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;

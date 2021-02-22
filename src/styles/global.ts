import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* ========= Montserrat ========= */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-600.woff2') format('woff2');
  }

  /* ========= Inter ========= */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-regular.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-500.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/inter-v3-latin-600.woff2') format('woff2'),
  }

  /* ========= Rajdhani =========*/
  @font-face {
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/rajdhani-v10-latin-600.woff2') format('woff2'),
  }

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
      font-family: ${theme.font.family};
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

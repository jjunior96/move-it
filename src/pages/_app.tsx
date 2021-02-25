import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { ChallengesProvider } from 'contexts/ChallengesContext';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Move it</title>
      </Head>
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;

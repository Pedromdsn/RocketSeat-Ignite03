import Head from "next/head";
import Header from "../components/Header";

import styled, { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { Reset } from "styled-reset";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>RocketSeat</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Container>
          <Reset />
          <Header />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

const Container = styled.div`
  background: ${(e) => e.theme.background};
  min-height: 100vh;
`;

export default MyApp;

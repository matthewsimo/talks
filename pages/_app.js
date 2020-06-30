import React from 'react';
import NextApp from 'next/app';
import { Global, css } from '@emotion/core';

import Header from 'components/Header';
import theme from 'src/theme';
import { ThemeProvider, Container } from 'theme-ui';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            @import url('https://rsms.me/inter/inter.css');
          `}
        />
        <Container>
          <Header />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}

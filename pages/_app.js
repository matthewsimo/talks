import React from 'react';
import NextApp from 'next/app';
import { Global, css } from '@emotion/core';

import Layout from 'components/Layout';
import theme from 'src/theme';
import { ThemeProvider } from 'theme-ui';

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
        <Layout {...this.props}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

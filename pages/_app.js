import React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';
import { Global, css } from '@emotion/core';

import Layout from 'components/Layout';
import theme from 'lib/theme';
import { ThemeProvider } from 'theme-ui';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Matthew Simo</title>
          <meta name="description" content="Personal Site of Matthew Simo -- Software Engineer & UX Designer" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
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

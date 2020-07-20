import React from 'react';
import { useRouter } from 'next/router';
import { Box, Container } from 'theme-ui';
import { utils } from 'lib/theme';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children, ...props }) => {
  const router = useRouter();

  return (
    <Container variant="page" sx={{ display: 'flex', flexDirection: 'column' }}>
      {router.pathname !== '/' && <Header />}
      <Box sx={{
        maxWidth: '80ch',
        ...utils.inline("padding", [3, 4, 5]),
        paddingBottom: [4, 5],
        zIndex: 1,
        flexGrow: 1,
      }}>{children}</Box>
      {router.pathname !== '/' && <Footer />}
    </Container>
  );
};

export default Layout;

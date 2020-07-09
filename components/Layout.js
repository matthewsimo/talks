import React from 'react';
import { useRouter } from 'next/router';
import { Container } from 'theme-ui';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children, ...props }) => {
  console.log({ props });
  const router = useRouter();

  return (
    <Container variant="page" sx={{ display: 'flex', flexDirection: 'column' }}>
      {router.pathname !== '/' && <Header />}
      <Container sx={{ maxWidth: '80ch', mt: 80 }}>{children}</Container>
      {router.pathname !== '/' && <Footer />}
    </Container>
  );
};

export default Layout;

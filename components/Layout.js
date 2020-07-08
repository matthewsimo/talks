import React from 'react';
import { Container } from 'theme-ui';

const Layout = ({ children }) => {
  return (
    <Container variant="page">
      <Container sx={{ maxWidth: '80ch' }}>{children}</Container>
    </Container>
  );
};

export default Layout;

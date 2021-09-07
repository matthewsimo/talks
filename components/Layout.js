import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from './Container';
import { useCallback, useEffect } from 'react';

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen bg-main relative overflow-hidden">
      <Header />

      <Container
        as="main"
        className="w-full mt-40 mb-16 flex-grow"
        {...props}
      />

      <Footer />
    </div>
  );
}

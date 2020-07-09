import React from 'react';
import Link from 'next/link';
import { Heading, Flex, IconButton } from 'theme-ui';
import { Settings } from 'react-feather';

const Header = () => {
  return (
    <header>
      <Flex>
        <Heading>
          <Link href="/">
            <a>Matthew Simo</a>
          </Link>
        </Heading>
        <Flex>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/words">
            <a>Words</a>
          </Link>
          <Link href="/play">
            <a>Play</a>
          </Link>
        </Flex>

        <IconButton onClick={() => console.log('trigger theme customizer')}>
          <Settings />
        </IconButton>
      </Flex>
    </header>
  );
};

export default Header;

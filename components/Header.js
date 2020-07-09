import React from 'react';
import Link from 'next/link';
import { Heading, NavLink, Flex, IconButton } from 'theme-ui';
import { Settings } from 'react-feather';

const Header = () => {
  return (
    <header>
      <Flex>
        <Heading>
          <Link href="/" passHref>
            <NavLink>Matthew Simo</NavLink>
          </Link>
        </Heading>
        <Flex>
          <Link href="/about" passHref>
            <NavLink>About</NavLink>
          </Link>
          <Link href="/words" passHref>
            <NavLink>Words</NavLink>
          </Link>
          <Link href="/play" passHref>
            <NavLink>Play</NavLink>
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

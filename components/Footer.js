import React from 'react';
import Link from 'next/link';
import { Heading, Flex, Box, Button, Text, useColorMode } from 'theme-ui';
import Icon from 'components/Icon';

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Flex
      as={'footer'}
      sx={{
        backgroundColor: (theme) => theme.colors.muted,
        flexDirection: ['column', 'row'],
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
      }}
    >
      <Flex sx={{ flexDirection: 'column' }}>
        <Text as="p">
          Made in Texas
          <Icon
            title="Texas Icon - Icon made by Good Ware from www.flaticon.com"
            width="18"
            height="18"
            link="/icons/texas.svg#texas"
          />
        </Text>
        <Text as="small">
          &copy; &infin; Matthew Simo. Inspire. Attribute. Be cool. Don't steal.
          &hearts;
        </Text>

        <Button
          onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
        >
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Flex>
      <Flex sx={{ flexDirection: 'column' }}>
        <Link href="/about">
          <a>Contact</a>
        </Link>
        <Link href="/">
          <a>Twitter</a>
        </Link>
        <Link href="/">
          <a>GitHub</a>
        </Link>
        <Link href="/">
          <a>RSS</a>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;

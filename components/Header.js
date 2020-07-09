import React from 'react';
import Link from 'next/link';
import { Box, Heading, NavLink, Flex, IconButton } from 'theme-ui';
import { Settings } from 'react-feather';
import { utils } from 'src/theme';
import { alpha } from '@theme-ui/color';

const Header = () => {
  return (
    <Box as="header" sx={{
      position: "fixed",
      left: 2,
      right: 2,
      zIndex: 'max'
    }}>
      <Flex
        as="nav"
        sx={{
          ...utils.block('padding', [3, 4]),
          ...utils.inline('padding', [3, 4]),
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: "blur(4px)",
          backgroundColor: `hsla(1,0%,100%,0.5)`,
          borderRadius: 5,
          border: `1px solid hsl(200,0%,100%,.2)`,
          boxShadow: theme =>
            `12px 12px 48px 12px ${alpha('text', 0.3)(theme)}, -12px -12px 48px 12px ${alpha('primary', 0.3)(theme)}`,
        }}
      >
        <Flex
          sx={{
            '& > a': {
              mr: [3, 4],
            },
          }}
        >
          <Link href="/" passHref>
            <NavLink>Matthew Simo</NavLink>
          </Link>
          <Link href="/about" passHref>
            <NavLink>About</NavLink>
          </Link>
          <Link href="/posts" passHref>
            <NavLink>Posts</NavLink>
          </Link>
        </Flex>

        <IconButton
          onClick={() => {
            console.log('trigger theme customizer')
          }}
          sx={{ alignSelf: 'end', cursor: 'pointer' }}
        >
          <Settings />
        </IconButton>
      </Flex>
    </Box>
  );
};

export default Header;

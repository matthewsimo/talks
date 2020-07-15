import React, { useState } from 'react';
import Link from 'next/link';
import { Box, NavLink, Flex, IconButton } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import { Settings } from 'react-feather';

import { utils } from 'src/theme';

const Header = () => {

  return (
    <Box as="header" sx={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 'max',
      fontWeight: 'bold',
      fontVariationSettings: 'heading-normal'
    }}>
      <Flex
        as="nav"
        sx={{
          ...utils.inline("padding", [3, 4, 5]),
          ...utils.block("padding", [3, 3, 4]),
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: `blur(4px)`,
          backgroundColor: theme => alpha(theme.colors.background, 0.5),
          boxShadow: theme => {
            const shadowColor = alpha(theme.colors.secondary, .3)(theme);
            const addOne = val => val + theme.space[1];
            return ([
              `0 0 ${addOne(theme.space[3])}px ${addOne(theme.space[3])}px ${shadowColor}`,
              `0 0 ${theme.space[4]}px ${theme.space[4]}px ${shadowColor}`,
              `0 0 ${addOne(theme.space[4])}px ${addOne(theme.space[4])}px ${shadowColor}`,
            ])
          },
          borderBottomColor: alpha('background', .5),
          borderBottomStyle: 'solid',
          borderBottomWidth: 1
        }}
      >
        <Flex
          sx={{
            '& > a': {
              mr: [3, 4],
              p: 1
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

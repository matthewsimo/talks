import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useThemeUI, Box, NavLink, Flex, IconButton } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import useScrollPosition from 'hooks/useScrollPosition';

import ToggleColorButton from 'components/ToggleColorButton';

import { utils } from 'lib/theme';

const Header = () => {
  const context = useThemeUI()
  const { theme } = context
  const [pinned, setPinned] = useState(false);
  const { y } = useScrollPosition();

  if (pinned && y === 0) {
    setPinned(false);
  } else if (!pinned && y > 0) {
    setPinned(true);
  }

  const { h, s, primaryL: l } = theme.colors;
  const shadowColor = `hsla(${h}, ${s}, ${l}%, .25)`;
  const { boxShadow, backdropFilter } = {
    backdropFilter: pinned ? `blur(4px)` : `blur(0px)`,
    boxShadow: pinned ? `0 0 15px 15px ${shadowColor}` : `0 0 0px 0px ${shadowColor}`,
  };

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
          position: 'relative',
          '&:after': {
            content: "''",
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: theme => alpha(theme.colors.background, 0.5),
            borderBottomColor: alpha('background', .5),
            borderBottomStyle: 'solid',
            borderBottomWidth: 1,
            boxShadow,
            backdropFilter,
            opacity: pinned ? 1 : 0,
            transitionProperty: 'opacity',
            transitionDuration: '.3s',
            transitionDelay: '.05s',
            transitionTimingFunction: 'ease-in-out',
            zIndex: -1
          }
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
          <Link href="/" passHref>
            <NavLink>About</NavLink>
          </Link>
          <Link href="/posts" passHref>
            <NavLink>Posts</NavLink>
          </Link>
        </Flex>

        {/*

        <IconButton
          onClick={() => {
            console.log('trigger theme customizer')
          }}
          sx={{ alignSelf: 'end', cursor: 'pointer' }}
        >
          <Settings />
        </IconButton>
*/}
        <ToggleColorButton />
      </Flex>
    </Box>
  );
};

export default Header;

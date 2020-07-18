import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useThemeUI, Box, NavLink, Flex, IconButton } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import useScrollPosition from 'src/hooks/useScrollPosition';
import { useSpring, animated } from 'react-spring'

import ToggleColorButton from 'components/ToggleColorButton';

import { utils } from 'src/theme';

const Header = () => {
  const context = useThemeUI()
  const { theme } = context
  const [pinned, set] = useState(false);
  const { y } = useScrollPosition();

  const [headerHeight, setHeight] = useState(0);
  const heightRef = useCallback(header => {
    if (header !== null) {
      setHeight(header.getBoundingClientRect().height);
    }
  }, []);

  const { h, s, primaryL } = theme.colors;
  const shadowColor = `hsla(${h}, ${s}, ${primaryL}%, .25)`;

  const { boxShadow, backdropFilter } = useSpring({
    backdropFilter: pinned ? `blur(4px)` : `blur(0px)`,
    boxShadow: pinned ? `0 0 15px 15px ${shadowColor}` : `0 0 0px 0px ${shadowColor}`,
    from: {
      backdropFilter: 'blur(0px)',
      boxShadow: `0 0 0px 0px ${shadowColor}`,
    }
  })

  if (pinned && y < headerHeight * 2) {
    set(false);
  } else if (!pinned && y > headerHeight * 2) {
    set(true);
  }

  const AnimatedFlex = animated(Flex)

  return (
    <Box as="header" ref={heightRef} sx={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 'max',
      fontWeight: 'bold',
      fontVariationSettings: 'heading-normal'
    }}>
      <AnimatedFlex
        as="nav"
        style={{
          backdropFilter,
          position: 'relative',
          boxShadow: boxShadow
        }}
        sx={{
          ...utils.inline("padding", [3, 4, 5]),
          ...utils.block("padding", [3, 3, 4]),
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: theme => alpha(theme.colors.background, 0.5),
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
      </AnimatedFlex>
    </Box>
  );
};

export default Header;

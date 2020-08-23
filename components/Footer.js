import React from 'react';
import Link from 'next/link';
import { Link as ThemeLink, Avatar, Flex, Box, Text } from 'theme-ui';
import Icon from 'components/Icon';
import { utils } from 'lib/theme';

const Footer = () => {
  return (
    <Flex
      as={'footer'}
      sx={{
        backgroundColor: (theme) => theme.colors.muted,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        padding: [3, 4, 5],
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
      }}
    >
      <Flex
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'start',
          pt: [2, 3],
          pb: [3, 2],
          pr: [0, 3],
          mb: [3, 4],
          maxWidth: ['100%', '60%'],
        }}
      >
        <Avatar sx={{ mr: [2, 3, 4], mt: 1 }} src="/matthewsimo-avatar.jpg" />
        <Text>
          <Text as="strong" variant="bold">
            Matthew Simo
          </Text>{' '}
          is a Software Engineer & UX Designer based in Houston, Texas. Thanks
          for visiting, have a look around!
        </Text>
      </Flex>
      <Flex
        sx={{
          flexDirection: ['row'],
          justifyContent: ['space-between', 'space-around'],
          width: ['100%', '40%'],
          paddingLeft: [0, 4],
          mb: [4, 0]
        }}
      >
        <Flex
          as="nav"
          sx={{
            flex: '1 1 45%',
            flexDirection: 'column',
            ...utils.block('padding', [2, 3]),
            ...utils.inline('padding', 2),
          }}
        >
          <Link href="/about" passHref>
            <ThemeLink>About</ThemeLink>
          </Link>
          <Link href="/posts" passHref>
            <ThemeLink>Posts</ThemeLink>
          </Link>
          <Link href="#" passHref>
            <ThemeLink title="Coming soon!">Labs</ThemeLink>
          </Link>
          { /** 
          <Link href="/colophon">
            <a>Colophon</a>
          </Link>
          <Link href="/">
            <a>RSS</a>
          </Link>
*/}
        </Flex>
        <Flex
          as="nav"
          sx={{
            flex: '1 1 45%',
            flexDirection: 'column',
            ...utils.block('padding', [2, 3]),
            ...utils.inline('padding', 2),
          }}
        >
          { /**
          <Link href="/">
            <a>Email</a>
          </Link>
          */}
          <ThemeLink href="https://twitter.com/matthewsimo/">
            Twitter
          </ThemeLink>
          <ThemeLink href="https://github.com/matthewsimo">
            GitHub
          </ThemeLink>
          <ThemeLink href="https://www.linkedin.com/in/matthewsimo/">
            LinkedIn
          </ThemeLink>
        </Flex>
      </Flex>
      <Box sx={{ mt: [2, 3, 4], flexBasis: '100%' }}>
        <Text as="small">
          &copy; {new Date().getFullYear()} Matthew Simo. Learn. Share. Attribute. Be nice. &hearts;
          <Text as="span" sx={{ display: 'block' }}>
            <Icon
              title="Texas Icon - Icon made by Good Ware from www.flaticon.com"
              width="18"
              height="18"
              link="/icons/texas.svg#texas"
            />
            Made in Texas
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;

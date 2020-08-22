import Link from 'next/link';
import { Heading, Styled, Box } from 'theme-ui';

const Home = () => (
  <Box pt={[3, 4, 5]}>

    <Styled.h3 as="h1">Howdy, I'm Matthew Simo</Styled.h3>

    <Heading as="h3">I build things for humanoids.</Heading>

    <Styled.h5 as="span">🤖💖😁</Styled.h5>

    <p>I'm a Software Engineer & UX Designer based in Houston, Texas. I work as a Principal Consultant at <Styled.a href="https://www.rightpoint.com/">Rightpoint</Styled.a>. You can usually find me exploring the intersection of computers and humans, regardless if that means the web, mobile, or spatial computing.</p>

    <Link href="/posts" passHref>
      <Styled.a>See posts</Styled.a>
    </Link>

  </Box>
);

export default Home;
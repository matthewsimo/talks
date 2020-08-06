import Link from 'next/link'
import { Link as ThemeLink, Heading, Box, Text } from 'theme-ui';

import postsData from 'lib/posts.json';
import { utils } from 'lib/theme';

function Posts({ posts }) {
  return (
    <Box sx={{ minHeight: 300, paddingTop: [5, 6] }}>
      <Heading as="h2">Posts</Heading>
      {posts.length > 0 && (
        <Box as="ul" sx={{ ...utils.block('padding', [3, 4]) }}>
          {posts.map(post => (
            <Text as="li" key={`post-${post.slug}`}>
              <Link
                href="/posts/[slug]"
                as={`/posts/${post.slug}`}
                passHref
              >
                <ThemeLink>{post.title}</ThemeLink>
              </Link>
              {" "} - <time dateTime={post.date}>{post.date}</time>
            </Text>
          ))}
        </Box>
      )}
    </Box>
  )

}

export default Posts;

export async function getStaticProps() {
  return {
    props: { posts: postsData },
  }
}
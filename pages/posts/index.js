import Head from 'next/head';
import Link from 'components/Link';
import Heading from 'components/Heading';
import Layout from 'components/Layout';

import { getAllFilesFrontMatter } from 'lib/mdx';

export default function Posts({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Matthew Simo </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading level="3" as="h1" weight="light">
        Posts
      </Heading>
      {posts.length > 0 ? (
        <ul className="text-xl py-8 space-y-2 text-main">
          {posts.map((post) => (
            <li key={`post-${post.slug}`}>
              {post.id} - <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              {post.date && (
                <>
                  {' '}
                  <time className="text-main-300" dateTime={post.date}>
                    {post.date}
                  </time>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <Heading level="5">No posts, sorry.</Heading>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();
  return {
    props: { posts: posts }
  };
}

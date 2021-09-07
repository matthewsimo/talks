import { useMemo } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Layout from 'components/Layout';
import Link from 'components/Link';

import { getMDXComponent } from 'mdx-bundler/client';
import { getFiles, getFileBySlug } from 'lib/mdx';

import Heading from 'components/Heading';
import PostIntro from 'components/PostIntro';
import ImageAttribution from 'components/ImageAttribution';
import components from 'components/MDXComponents';

export default function Post({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const post = frontMatter;
  const router = useRouter();
  if ((!router.isFallback && !post?.slug) || post.draft) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      {router.isFallback ? (
        <Heading>Loading…</Heading>
      ) : (
        <>
          <PostIntro post={post} />
          <article className="text-main mt-20 sm:mt24 z-10 relative">
            <Head>
              <title>{post.title} | Matthew Simo</title>
            </Head>
            <div className="prose sm:prose-lg mx-auto my-8 sm:my-10">
              <Component components={components} />
            </div>
            <ImageAttribution />
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug(params.slug);
  const showDrafts = JSON.parse(process.env.SHOW_DRAFTS) || false;

  if (showDrafts) {
    post.frontMatter.draft = false;
  }

  return { props: { ...post } };
}

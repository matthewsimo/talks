import Head from 'next/head';
import { Box } from 'theme-ui';
import { utils } from 'lib/posts';

import PostIntro from 'components/PostIntro';

export default function Layout(meta) {
  return ({ children: content }) => {
    const hasMeta = meta.title && meta.id && meta.img;
    return (
      <div>
        <Head>
          <title>{hasMeta && `${meta.id} - ${meta.title} | `}Matthew Simo</title>
        </Head>

        {hasMeta ? (
          <>
            <PostIntro
              title={meta.title}
              meta={`${utils.getDate(meta)} | ${meta.id}`}
              src={meta.img}
              tone={meta.tone}
            />
            {content}
          </>
        ) : (
            <Box pt="6">
              {content}
            </Box>
          )}
      </div>
    )
  }
}

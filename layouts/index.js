import Head from 'next/head';
import { BaseStyles } from 'theme-ui';
import { utils } from 'lib/posts';

import PostIntro from 'components/PostIntro';

export default function Layout(meta) {
  return ({ children: content }) => {
    return (
      <div>
        <Head>
          <title>{meta.id} - {meta.title} | Matthew Simo</title>
        </Head>

        <PostIntro
          title={meta.title}
          meta={`${utils.getDate(meta)} | ${meta.id}`}
          src={meta.img}
          tone={meta.tone}
        />
        <BaseStyles>
          {content}
        </BaseStyles>
      </div>
    )
  }
}

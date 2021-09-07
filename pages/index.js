import Head from 'next/head';
import Link from 'components/Link';
import Heading from 'components/Heading';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-24 bg-main">
      <Head>
        <title>Matthew Simo </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full px-20 space-y-4">
        <Heading level="2" weight="light" className="leading-tight">
          Howdy, I'm <span className="inline-block">Matthew Simo</span>
        </Heading>
        <Heading as="h3" level="3">
          I build things for humanoids.
        </Heading>
        <Heading as="p" level="5">
          🤖💖😁
        </Heading>
        <div className="text-xl text-main font-light space-y-4">
          <p>
            I'm a Software Engineer & UX Designer based in Houston, Texas. I
            work as a Solutions Architect of Front-End Engineering at{' '}
            <Link href="https://www.rightpoint.com/">Rightpoint</Link> where I
            lead teams to build software that improves people's lives. You can
            usually find me exploring the intersection of computers and humans,
            regardless if that means the web, mobile, or spatial computing.
          </p>
          <p>
            {/*<Link href="/about">Find out more</Link>,{' '} */}
            <Link href="/posts">Read some articles</Link>, or{' '}
            <Link
              href="#"
              onClick={() =>
                (window.location.href = window.atob(
                  'bWFpbHRvOm1hdHRoZXcuYS5zaW1vQGdtYWlsLmNvbQ=='
                ))
              }
            >
              get in touch
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}

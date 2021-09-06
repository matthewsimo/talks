import Head from 'next/head';

import Heading from 'components/Heading';

const handleClick = (e) => {
  e.preventDefault();

  const props = [
    '--primary-lightness-0',
    '--primary-lightness-1',
    '--primary-lightness-2',
    '--primary-lightness-3',
    '--primary-lightness-4',
    '--primary-lightness-5',
    '--primary-lightness-6',
    '--primary-lightness-7',
    '--primary-lightness-8',
  ];

  props.map((v) => {
    const currentValue = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(v).trim()
    );
    const newValue = `${100 - currentValue}%`;
    document.documentElement.style.setProperty(v, newValue);
  });
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-main">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <button
          className="bg-main-primary text-main-muted rounded p-2"
          onClick={handleClick}
        >
          Invert!
        </button>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <div>
          {[1, 2, 3, 4, 5, 6].map((v) => (
            <Heading level={v} key={`heading-test-${v}`}>
              Test Heading #{`${v}`}
            </Heading>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {[
            'bg-main-100',
            'bg-main-200',
            'bg-main-300',
            'bg-main-400',
            'bg-main-500',
            'bg-main-600',
            'bg-main-700',
            'bg-main-800',
            'bg-main-900',
          ].map((v, i) => (
            <div
              key={`bg-test-${v}`}
              className={`w-10 h-10 m-3 border-8 ${v}`}
              style={{
                'border-top-color': 'white',
                'border-left-color': 'white',
                'border-bottom-color': 'black',
                'border-right-color': 'black',
              }}
            ></div>
          ))}
        </div>
        {/* backgroundColor: `hsla(var(--primary-hue), var(--primary-saturation), var(--primary-lightness-${v}))`, */}

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {[
            'text-main',
            'text-main-100',
            'text-main-200',
            'text-main-300',
            'text-main-400',
            'text-main-500',
            'text-main-600',
            'text-main-700',
            'text-main-800',
            'text-main-900',
          ].map((v, i) => (
            <div
              key={`text-test-${v}`}
              className={`text-left ${v} selection:bg-main-800 py-2`}
            >
              <p>
                Lucas ipsum dolor sit amet qui-gonn skywalker ventress leia
                yavin jinn amidala kenobi jabba moff. Solo sidious bespin
                skywalker skywalker. Kenobi ahsoka amidala sebulba. K-3po mace
                obi-wan chewbacca. Luuke dagobah r2-d2 boba jabba utapau
                skywalker windu. Yavin grievous wookiee ackbar hutt solo windu.
                Darth ahsoka ackbar bespin ponda organa. Sebulba endor dantooine
                leia grievous padmé aayla c-3p0 utapau. Mace mustafar darth jawa
                twi'lek cade. Solo anakin amidala owen mothma ewok. Yavin fett
                utapau yoda jinn grievous grievous bothan.
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t text-gray-600">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}

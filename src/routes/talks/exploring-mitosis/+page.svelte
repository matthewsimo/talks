<script>
	import { Deck, Slide } from '$lib/Deck';
	import Heading from '$lib/Heading.svelte';
	import HeadMeta from '$lib/HeadMeta.svelte';
	import Link from '$lib/Link.svelte';

	const title = `Exploring Mitosis`;

	const resourceLinks = [
		{ l: `https://github.com/builderio/mitosis`, d: `Mitosis Repo` },
		{
			l: `https://mitosis.builder.io/`,
			d: `Mitosis Fiddle`
		},
		{
			l: `https://www.builder.io/`,
			d: `BuilderIO`
		},
		{
			l: 'https://papanasi.js.org/',
			d: 'Papanasi - component library using mitosis'
		},
		{
			l: 'https://portal.gitnation.org/contents/its-time-to-de-fragment-the-web',
			d: '"It\'s Time to De-Fragment the Web" talk from core maintainer Sami Jaber'
		},
		{
			l: `/posts/2023-04-15-a-look-at-mitosis`,
			d: `Blog post version of this talk`
		}
	];
</script>

<svelte:head><title>{title} | Matthew Simo</title></svelte:head>

<HeadMeta
	{title}
	url={`https://matthewsimo.com/talks/exploring-mitosis`}
	description={`A slide deck for a talk on Mitosis`}
/>

<Deck>
	<Slide>
		<Heading classes="text-center">{title}</Heading>
	</Slide>

	<Slide>
		<div class="mt-6 space-2 flex justify-around">
			<Heading level={2} as="h2">Agenda</Heading>
			<div class="space-y-4">
				<Heading level={4} as="h3">Mitosis</Heading>

				<ol class="list-decimal space-2">
					<li class="text-2xl">What is it?</li>
					<li class="text-2xl">Who is building it?</li>
					<li class="text-2xl">Why might you use it?</li>
					<li class="text-2xl">Initial Thoughts</li>
					<li class="text-2xl">Resources</li>
				</ol>
			</div>
		</div>
	</Slide>

	<Slide>
		<Heading classes="absolute top-6 left-6 text-main-500" level={6} as="h2">What is it?</Heading>

		<img
			class="mx-auto"
			alt={`Mitosis logo - Write components once, compile to every framework`}
			src="/assets/img/mitosis.png"
		/>
	</Slide>

	<Slide>
		<Heading classes="absolute top-6 left-6 text-main-500" level={6} as="h2">What is it?</Heading>

		<div class="mx-20">
			<ul class="mt-6 space-y-4 list-decimal">
				<li class="text-2xl">A JSX syntax that defines mitosis components</li>
				<li class="text-2xl">
					A "mitosis Intermediate Representation (IR)" - This is essentially a JSON AST that mitosis
					uses for compiling.
				</li>
				<li class="text-2xl">
					Command line tooling that will take all your mitosis jsx files, transform it to the IR,
					then take the IR and compile it to all the targets you define in your <code
						>mitosis.config.js</code
					>
					file.
				</li>
			</ul>
		</div>
	</Slide>

	<Slide>
		<Heading classes="absolute top-6 left-6 text-main-500" level={6} as="h2">What is it?</Heading>

		<div>
			<img
				class="mx-auto max-h-[80vh] relative -top-[15vh]"
				alt={`Mitosis flow`}
				src="/assets/img/mitosis-flow.png"
			/>
		</div>
	</Slide>

	<Slide>
		<Heading classes="absolute top-6 left-6 text-main-500" level={6} as="h2">What is it?</Heading>

		<div class="mx-auto">
			<pre>
          <code
					>{`
          export function MyComponent() {
            const state = useStore({
              name: 'Steve',
            });

            return (
              <div>
                <input value={state.name} onChange={(event) => (state.name = event.target.value)} />
              </div>
              );
            }
`}</code
				></pre>
		</div>
	</Slide>

	<Slide>
		<Heading classes="absolute top-6 left-6 text-main-500" level={6} as="h2">What is it?</Heading>

		<div class="mx-auto">
			<pre><code
					>{`
{
  "@type": "@builder.io/mitosis/component",
  "state": {
    "name": "Steve"
  },
  "nodes": [
    {
      "@type": "@builder.io/mitosis/node",
      "name": "div",
      "children": [
        {
          "@type": "@builder.io/mitosis/node",
          "bindings": {
            "value": "state.name",
            "onChange": "state.name = event.target.value"
          }
        }
      ]
    }
  ]
}`}</code
				></pre>
		</div>
	</Slide>

	<Slide>
		<Heading classes="absolute top-6 left-6 text-main-500" level={6} as="h2">What is it?</Heading>

		<div class="mx-auto">
			<pre><code
					>{`
import Context from './simple.context.lite';
import { useContext, setContext } from '@builder.io/mitosis';

export default function ComponentWithContext(props: { content: string }) {
  // you can access the context using \`useContext\`
  const foo = useContext(Context);

  // you can use \`setContext\` to provide a new value for the context
  setContext(Context, {
    foo: 'baz',
    content() {
      return props.content;
    },
  });

  return (
    // you can also use \`Context.provider\` to provide a new value for the context
    <Context.Provider value={{ bar: 'baz' }}>{foo.value}</Context.Provider>
  );
}
`}</code
				></pre>
		</div>
	</Slide>

	<Slide>
		<Heading classes="absolute top-6 left-6 text-main-500" level={6} as="h2">What is it?</Heading>

		<div class="mt-6 space-2 flex justify-around align-baseline">
			<Heading level={3} as="h2"
				><Link href="https://github.com/BuilderIO/mitosis/blob/main/docs/hooks.md"
					>Hooks & Lifecycle methods</Link
				></Heading
			>
			<ol class="list-decimal space-y-2 w-[50%]">
				<li class="text-2xl"><code>useRef</code></li>
				<li class="text-2xl"><code>useStyle</code></li>
				<li class="text-2xl"><code>useMetadata</code></li>
				<li class="text-2xl"><code>useDefaultProps</code></li>
				<li class="text-2xl"><code>onInit</code></li>
				<li class="text-2xl"><code>onMount</code></li>
				<li class="text-2xl"><code>onUnMount</code></li>
				<li class="text-2xl"><code>onUpdate</code></li>
			</ol>
		</div>
	</Slide>

	<Slide>
		<Heading classes="absolute top-6 left-6 text-main-500" level={6} as="h2"
			>Who is building it?</Heading
		>

		<div class="mx-20 space-y-4">
			<img
				class="bg-white p-4 mb-6"
				src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fe6a94bfbccd24ec8b4db085cd475b7eb?width=150"
				alt="builder.io logo"
			/>
			<p class="text-center leading-relaxed text-2xl">
				The folks over at <Link href={resourceLinks[2].l}>{resourceLinks[2].d}</Link>'s main product
				is a "visual headless CMS", which is the only other mitosis frontend aside from the JSX
				syntax.
			</p>

			<p class="text-center leading-relaxed text-2xl">
				The team at builder.io is very talented and capable. The are also behind the great open
				source tools <Link href="https://github.com/BuilderIO/partytown">partytown</Link> and
				<Link href="https://github.com/BuilderIO/qwik">qwik</Link>.
			</p>
		</div>
	</Slide>

	<Slide>
		<Heading classes="absolute top-6 left-6 text-main-500" level={6} as="h2">
			Why might you use it?
		</Heading>

		<div class="mt-6 space-2 flex justify-around align-baseline">
			<Heading level={4} as="h2">Interesting Usecases</Heading>
			<ol class="list-decimal space-y-2 w-[50%]">
				<li class="text-2xl">
					Maintaining a design system and component library for consumers using varied frontend
					frameworks
				</li>
				<li class="text-2xl">
					Dramatically lower the investment to brind your design system and core components to
					alternate platforms
				</li>
			</ol>
		</div>
	</Slide>

	<Slide>
		<Heading classes="absolute top-6 left-6 text-main-500" level={6} as="h2">
			Initial Thoughts
		</Heading>

		<div class="mt-6 space-2 flex justify-around align-baseline">
			<Heading level={2} as="h2">Pros</Heading>
			<ol class="list-decimal space-y-2 w-[60%]">
				<li class="text-2xl">Active development</li>
				<li class="text-2xl">Active and friendly interactions</li>
				<li class="text-2xl">Helpful devs and community</li>
				<li class="text-2xl">Fast compilation and works surprisingly well</li>
				<li class="text-2xl">JS ecosystem needs more agnostic first tools</li>
			</ol>
		</div>
	</Slide>

	<Slide>
		<Heading classes="absolute top-6 left-6 text-main-500" level={6} as="h2">
			Initial Thoughts
		</Heading>

		<div class="mt-6 space-2 flex justify-around align-baseline">
			<Heading level={2} as="h2">Cons</Heading>
			<ol class="list-decimal space-y-2 w-[60%]">
				<li class="text-2xl">Large and complex surface area</li>
				<li class="text-2xl">Still early days</li>
				<li class="text-2xl">Could be difficult to get contributors</li>
				<li class="text-2xl">Hard to see support for specific targets</li>
				<li class="text-2xl">
					Always have to deal with platform constraints & specific device UX paradigms
				</li>
			</ol>
		</div>
	</Slide>

	<Slide>
		<Heading classes="absolute top-6 left-6 text-main-500" level={6} as="h2">
			Initial Thoughts
		</Heading>

		<div class="mt-6 space-2 flex justify-around align-baseline">
			<Heading level={2} as="h2">Advice</Heading>
			<ol class="list-decimal space-y-2 w-[60%]">
				<li class="text-2xl">Standardize & document Mitosis IR</li>
				<li class="text-2xl">Collaborate wtih framework authors</li>
				<li class="text-2xl">Make a <code>npm create mitosis</code> template</li>
			</ol>
		</div>
	</Slide>

	<Slide>
		<Heading level={2} as="h2">Resources</Heading>
		<ul class="mt-6 space-y-4">
			{#each resourceLinks as link}
				<li class="text-xl">
					<Link href={link.l}>
						{link.d}
					</Link>
				</li>
			{/each}
		</ul>
	</Slide>

	<Slide>
		<Heading as="h2">Thank you!</Heading>
	</Slide>
</Deck>

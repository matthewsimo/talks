<script>
	import { Deck, Slide } from '$lib/Deck';
	import Heading from '$lib/Heading.svelte';
	import HeadMeta from '$lib/HeadMeta.svelte';
	import Link from '$lib/Link.svelte';
	import AnimationPlayground from './AnimationPlayground.svelte';
</script>

<HeadMeta
	title="Animation 101"
	url={`https://matthewsimo.com/talks/animation-101`}
	description={`A slide deck for a talk covering the basics and history of animation`}
/>

<Deck>
	<Slide>
		<Heading classes="text-center">Master of Time & Space</Heading>
	</Slide>

	<Slide>
		<Heading level={2}>Agenda</Heading>
		<ol class="list-decimal mt-6 space-y-2">
			<li class="text-2xl">Why?</li>
			<li class="text-2xl">Offensively Short History</li>
			<li class="text-2xl">First Principles</li>
			<li class="text-2xl">Application</li>
			<li class="text-2xl">Resources</li>
		</ol>
	</Slide>

	<Slide>
		<Heading>Why?</Heading>
	</Slide>

	<Slide>
		<Heading classes="text-center transform-gpu scale-150">
			<span
				style:text-shadow={`
                4px 4px #ef3550,
                8px 8px #f48fb1,
                12px 12px #7e57c2,
                16px 16px #2196f3,
                20px 20px #26c6da,
                24px 24px #43a047,
                28px 28px #eeff41,
                32px 32px #f9a825,
                36px 36px #ff5722,
                40px 40px #ef3550,
                44px 44px #f48fb1,
                48px 48px #f48fb1,
                52px 52px #7e57c2,
                56px 56px #2196f3,
                60px 60px #26c6da,
                64px 64px #43a047,
                68px 68px #eeff41,
                72px 72px #f9a825,
                76px 76px #ff5722`}
			>
				UX
			</span>
		</Heading>
	</Slide>

	<Slide>
		<Heading>Extra Affordances</Heading>
		<blockquote
			class="text-main-300 text-2xl max-w-2xl my-12 pl-4 border-l-4 border-solid border-main-primary leading-relaxed"
		>
			<em class="text-main">Affordance:</em> the quality or property of an object that defines its possible
			uses or makes clear how it can or should be used
		</blockquote>
	</Slide>

	<Slide>
		<Heading>Extra Feedback</Heading>
		<blockquote
			class="text-main-300 text-2xl max-w-2xl my-12 pl-4 border-l-4 border-solid border-main-primary leading-relaxed"
		>
			<em class="text-main">Feedback:</em> indication that an action was initiated, completed, or is
			newly possible.
		</blockquote>
	</Slide>

	<Slide>
		<img
			class="mx-auto"
			src="https://i.redd.it/tcso5tdlzy631.png"
			alt="Uncle Ben from Spiderman saying 'With great power comes great responsibility.'"
		/>
	</Slide>

	<Slide>
		<div class="flex justify-center items-center w-full h-full">
			<button
				class="px-3 py-2 rounded-md transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 hover:rotate-720"
			>
				Wow
			</button>
		</div>
	</Slide>

	<Slide>
		<Heading>Offensively Short History</Heading>
	</Slide>

	<Slide>
		<img
			class="mx-auto relative -top-20"
			alt="The Full Sequence of the Muybridge 'The Horse In Motion'"
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/The_Horse_in_Motion_high_res.jpg/2560px-The_Horse_in_Motion_high_res.jpg"
		/>
	</Slide>

	<Slide>
		<img
			class="mx-auto"
			alt="The Muybridge 'The Horse In Motion' sequence played as a gif"
			src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Muybridge_race_horse_animated.gif"
		/>
	</Slide>

	<Slide>
		<figure
			class="relative -top-32 flex flex-col items-center space-y-4 text-main-300 text-opacity-50"
		>
			<img
				class="mx-auto"
				src="https://upload.wikimedia.org/wikipedia/commons/e/ed/1868_linett_kineograph_patent_fig._III.jpg"
				alt="A diagram of kineograph"
			/>
			<figcaption>kineograph</figcaption>
		</figure>
	</Slide>

	<Slide>
		<Link href="https://en.wikipedia.org/wiki/Disney_Animation:_The_Illusion_of_Life">
			<img
				class="mx-auto"
				src="https://upload.wikimedia.org/wikipedia/en/0/03/Book_the_illusion_of_life.jpg"
				alt="The cover of the book 'Disney Animation: The Illusion of Life'"
			/>
		</Link>
	</Slide>

	<Slide>
		<Heading>First Principles</Heading>
	</Slide>

	<Slide>
		<Heading level={2} classes="text-center mt-20">
			<Link href="https://vimeo.com/93206523">Video: The illusion of life</Link>
		</Heading>
	</Slide>

	<Slide>
		<Heading>Application</Heading>
		<p
			class="text-main-300 text-2xl max-w-2xl my-12 pl-4 border-l-4 border-solid border-main-primary leading-relaxed"
		>
			But how can I apply this to computers and my applications?
		</p>
	</Slide>

	<Slide>
		<Heading>Display Refresh Rate</Heading>
		<p class="text-main-300 text-2xl max-w-2xl my-12 pl-4 leading-relaxed">
			A display's refresh rate will dictate how often your "picture book" frames need to be. You'll
			see this measured in hertz. 1 Hz = 1 cycle per second.
		</p>
	</Slide>

	<Slide>
		<ul class="space-y-4 mt-6 text-3xl">
			<li class="text-red-600">30 FPS =~ 33.33 ms</li>
			<li class="text-yellow-600">45 FPS =~ 22.22 ms</li>
			<li class="text-green-600">
				60 FPS =~ 16.66 ms{' '}
				<span class="text-main">* most displays are here</span>
			</li>
			<li class="text-green-600">90 FPS =~ 11.11 ms</li>
			<li class="text-green-600">120 FPS =~ 8.33 ms</li>
		</ul>
	</Slide>

	<Slide>
		<Heading>Jank</Heading>
		<p
			class="text-main-300 text-2xl max-w-2xl my-12 pl-4 border-l-4 border-solid border-main-primary leading-relaxed"
		>
			If your application can not render in time it will drop frames which manifests itself as
			jitter or unsmooth animations. It can really negatively impact UX, and even cause nausea for
			certain devices and form factors.
			<br />
			DO NOT DROP FRAMES!
		</p>
	</Slide>

	<Slide>
		<Heading>Interpolation</Heading>
	</Slide>

	<Slide>
		<img
			class="mx-auto bg-white"
			src="https://lh6.googleusercontent.com/C6HoWWt1MFFLTtipN6cxN9YnTWN_VCceujk-fNdHPK1WlAFJcxPGfAbYr8r2kURc5P5ixz4nEb2ZRuJMdxEnKytLKhT5xs522HUPFs6TAcAeqnr7STWCnId133Wh6Rq9FI2B-Hw"
			alt="A sketch diagram explaining the relationship of linear interpolation"
		/>
	</Slide>

	<Slide>
		<AnimationPlayground />
	</Slide>

	<Slide>
		<AnimationPlayground withEasings={true} />
	</Slide>

	<Slide>
		<Heading level={2}>Resources</Heading>
		<ul class="mt-6 space-y-4">
			<li>
				<Link href="https://www.nngroup.com/articles/animation-purpose-ux/">
					https://www.nngroup.com/articles/animation-purpose-ux/
				</Link>
			</li>
			<li>
				<Link href="https://history-of-animation.webflow.io/">
					https://history-of-animation.webflow.io/
				</Link>
			</li>
			<li>
				<Link href="https://the12principles.tumblr.com/">https://the12principles.tumblr.com/</Link>
			</li>
			<li>
				<Link href="https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation">
					https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation
				</Link>
			</li>
			<li>
				<Link href="https://animista.net/play/basic/">https://animista.net/play/basic/</Link>
			</li>
			<li>
				<Link href="https://easings.net/">https://easings.net/</Link>
			</li>
		</ul>
	</Slide>
	<Slide>
		<Heading>Thanks!</Heading>
	</Slide>
</Deck>

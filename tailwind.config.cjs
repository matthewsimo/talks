const color = (lightnessIndex, opacityValue = 1) =>
	`hsla(var(--primary-hue), var(--primary-saturation), var(--primary-lightness-${lightnessIndex}), ${
		opacityValue ? opacityValue : 1
	} )`;

const colorWithOpacity =
	(lightnessIndex) =>
	({ opacityValue }) =>
		color(lightnessIndex, opacityValue);

const colorScale = () => {
	const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const colorMap = {};

	steps.map((v, i) => {
		// i.e. - 100: colorWithOpacity(0)
		colorMap[`${v}00`] = colorWithOpacity(i);
	});

	return colorMap;
};

const defaultStyle = {
	color: color(0),
	fontWeight: '400'
};

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundColor: {
				main: {
					DEFAULT: colorWithOpacity(8)
				}
			},
			borderColor: {
				main: {
					DEFAULT: colorWithOpacity(0)
				}
			},
			colors: {
				main: {
					...colorScale(),
					primary: colorWithOpacity(4),
					muted: colorWithOpacity(7)
				}
			},
			flex: {
				'1/2': '1 1 50%'
			},
			gridTemplateColumns: {
				page: `1fr min(68ch, 100%) 1fr`
			},
			maxWidth: {
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%'
			},
			ringColor: {
				main: {
					DEFAULT: colorWithOpacity(3)
				}
			},
			ringOffsetColor: {
				main: {
					DEFAULT: colorWithOpacity(8)
				}
			},
			rotate: {
				720: '720deg'
			},
			textColor: {
				main: {
					DEFAULT: colorWithOpacity(0)
				}
			},
			transitionTimingFunction: {
				'in-out-back': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
			}
		}
	},

	plugins: []
};

module.exports = config;

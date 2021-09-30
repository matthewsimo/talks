const { letterSpacing } = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');

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

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './_posts/**/*.mdx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backdropBlur: {
        scroll: 'var(--scroll-position-blur)'
      },
      opacity: {
        scroll: `var(--scroll-modifier)`
      },
      margin: {
        '-container': 'calc((-1 * (100vw - 1024px) / 2) - 4rem)',
        '-container+p': 'calc((-1 * (100vw - 1280px) / 2) + 4rem)'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      flex: {
        '1/2': '1 1 50%'
      },
      fontFamily: {
        sans: [`'Inter'`, ...defaultTheme.fontFamily.sans],
        inherit: `inherit`
      },
      colors: {
        main: {
          ...colorScale(),
          primary: colorWithOpacity(4),
          muted: colorWithOpacity(7)
        }
      },
      textColor: {
        main: {
          DEFAULT: colorWithOpacity(0)
        }
      },
      borderColor: {
        main: {
          DEFAULT: colorWithOpacity(0)
        }
      },
      backgroundColor: {
        main: {
          DEFAULT: colorWithOpacity(8)
        }
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: color(0),
            fontWeight: 300,
            a: {
              color: color(4),
              textDecoration: 'none',
              '&:hover': {
                color: color(3),
                textDecoration: 'underline'
              },
              '&:focus': {
                color: color(3),
                textDecoration: 'underline'
              }
            },
            'small a': {
              color: color(2),
              textDecoration: 'none',
              fontWeight: 'inherit',
              '&:hover': {
                color: color(1),
                textDecoration: 'underline'
              },
              '&:focus': {
                color: color(1),
                textDecoration: 'underline'
              }
            },
            code: {
              color: color(3),
              fontFamily: defaultTheme.fontFamily.mono
            },
            pre: {
              backgroundColor: color(7, 0.5),
              color: color(3),
              fontFamily: defaultTheme.fontFamily.mono
            },
            h1: {
              ...defaultStyle,
              fontSize: '3rem',
              lineHeight: 1,
              letterSpacing: '-0.05em'
            },
            h2: {
              ...defaultStyle,
              fontSize: '2.25rem',
              lineHeight: 1.625,
              letterSpacing: '-0.05em'
            },
            h3: {
              ...defaultStyle,
              fontSize: '1.875rem',
              lineHeight: 1.625,
              letterSpacing: '-0.025em'
            },
            h4: {
              ...defaultStyle,
              fontSize: '1.5rem',
              lineHeight: 1.625,
              letterSpacing: '-0.025em'
            },
            h5: {
              ...defaultStyle,
              fontSize: '1.25rem',
              lineHeight: 1.5,
              letterSpacing: '-0.025em'
            },
            blockquote: {
              ...defaultStyle,
              borderColor: color(5, 0.5)
            },
            strong: {
              ...defaultStyle,
              fontWeight: 700
            },
            'ol > li:before': {
              color: color(1, 0.75)
            },
            'ul > li:before': {
              backgroundColor: color(1, 0.75)
            }
          }
        },
        lg: {
          css: {
            h1: {
              ...defaultStyle,
              fontSize: '4.5rem',
              lineHeight: 1,
              letterSpacing: '-0.05em'
            },
            h2: {
              ...defaultStyle,
              fontSize: '3.75rem',
              lineHeight: 1,
              letterSpacing: '-0.05em'
            },
            h3: {
              ...defaultStyle,
              fontSize: '3rem',
              lineHeight: 1,
              letterSpacing: '-0.025em'
            },
            h4: {
              ...defaultStyle,
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              letterSpacing: '-0.025em'
            },
            h5: {
              ...defaultStyle,
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              letterSpacing: '-0.025em'
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {
      textColor: ['selection'],
      backgroundColor: ['selection']
    }
  },
  plugins: [
    require('tailwindcss-selection-variant'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ]
};

import { alpha } from '@theme-ui/color';

const makeHeadingStyle = (fontSize, letterSpacing) => {
  const heading = {
    color: 'text',
    fontFamily: 'inherit',
    lineHeight: 'heading',
    fontWeight: 'heading',
    fontVariationSettings: 'heading-normal',
    overflowWrap: 'anywhere',
  };

  return {
    ...heading,
    fontSize,
    letterSpacing,
  };
};

const hue = '200';
const saturation = '50%';
const lightness = [6, 16, 25, 35, 50, 65, 75, 88, 96];

const getColor = (l) => `hsl(${hue}, ${saturation}, ${l}%)`;

const colorScale = lightness.map((l) => getColor(l));
//console.log({ lightness, colorScale });

const colors = {
  h: hue,
  s: saturation,
  l: lightness,
  ...colorScale,
  text: colorScale[0],
  textL: lightness[0],
  background: colorScale[8],
  backgroundL: lightness[8],
  primary: colorScale[4],
  primaryL: lightness[4],
  secondary: colorScale[6],
  secondaryL: lightness[6],
  muted: colorScale[7],
  mutedL: lightness[7],
  modes: {
    dark: {
      text: colorScale[8],
      textL: lightness[8],
      background: colorScale[0],
      backgroundL: lightness[0],
      primary: colorScale[4],
      primaryL: lightness[4],
      secondary: colorScale[6],
      secondaryL: lightness[6],
      muted: colorScale[1],
      mutedL: lightness[1],
    },
  },
};

const combineObjects = (obj1, obj2) => {
  return Object.keys(obj1).reduce((acc, obj1Key) => {
    Object.keys(obj2).map((obj2Key) => {
      acc[`${obj1Key}-${obj2Key}`] = `${obj1[obj1Key]}, ${obj2[obj2Key]}`;
    });
    return acc;
  }, {});
};

const fontVariationSettingsPrimitives = {
  weights: {
    body: `'wght' 300`,
    heading: `'wght' 700`,
  },
  slants: {
    normal: `'slnt' -0.75`,
    italic: `'slnt' -3.5`,
  },
};
const fontVariationSettings = combineObjects(
  { ...fontVariationSettingsPrimitives.weights },
  { ...fontVariationSettingsPrimitives.slants }
);

const utils = {
  inline: (type, val) => ({
    [`${type}InlineStart`]: val,
    [`${type}InlineEnd`]: val,
  }),
  block: (type, val) => ({
    [`${type}BlockStart`]: val,
    [`${type}BlockEnd`]: val,
  }),
  getTextShadowForTone: (tone = 'dark', { dark, light }) => {
    return tone === 'dark' ? dark : light;
  },
};

export { utils };

export const base = {
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors,
  fonts: {
    body: "'Inter', sans-serif",
    heading: 'inherit',
    variable: "'Inter var', sans-serif",
    monospace: 'Menlo, monospace',
  },
  fontSizes: [14, 18, 21, 24, 28, 32, 48, 64, 96],
  fontStyles: {
    normal: 'normal',
    italic: 'italic',
  },
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 700,
  },
  fontVariationSettings,
  image: {
    width: '100%',
  },
  images: {
    avatar: {
      width: [64],
      height: [64],
      minWidth: 'auto',
    },
  },
  letterSpacings: {
    body: '-0.014em',
    ...['-0.006em', '-0.014em', '-0.018em', '-0.019em', '-0.021em', '-0.022em'],
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  radii: [0, 3, 5, 8, 25, 999],
  shadows: {
    none: 'none',
    darkHeader: '0 0 8px rgba(0,0,0,.4)',
    lightHeader: '0 0 8px rgba(255, 255, 255,.4)',
    darkTitle: '0 0 21px rgba(0,0,0,.4)',
    lightTitle: '0 0 21px rgba(255, 255, 255,.4)'
  },
  space: {
    ...[0, 4, 8, 16, 32, 64, 128, 256, 512],
  },
  text: {
    bold: {
      fontWeight: 'bold',
      fontVariationSettings: 'heading-normal',
    },
    'post-title': {
      ...makeHeadingStyle([7, 8], 5),
      paddingBottom: [4, 5],
    },
    'post-meta': {
      ...makeHeadingStyle(5, 5),
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      paddingBottom: [2, 3],
      paddingLeft: [2, 3],
      transform: ['rotate(0deg) translateY(0)', 'rotate(-90deg) translateY(100%)'],
      transformOrigin: 'bottom left',
      position: ['relative', 'absolute'],
      left: [0, 3, 4],
      right: [0, 0],
      bottom: [0, 3, 4],
      top: 'auto',
      width: ['auto', "calc(100vh - 160px)"]
    }
  },
  zIndices: {
    ...[0, 1, 5, 10],
    'max': 999
  },
  layout: {
    page: {
      backgroundColor: 'background',
      minHeight: `100vh`,
      overflow: 'hidden',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: ['110%', '120%', '135%'],
      backgroundColor: 'background',
      '@supports (font-variation-settings: normal)': {
        fontFamily: 'variable',
        fontVariationSettings: 'body-normal',
      },
    },
    h1: makeHeadingStyle(7, 5),
    h2: makeHeadingStyle(6, 5),
    h3: makeHeadingStyle(5, 5),
    h4: makeHeadingStyle(4, 4),
    h5: makeHeadingStyle(3, 3),
    h6: makeHeadingStyle(0, 0),
    p: {
      color: 'text',
      fontFamily: 'inherit',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      '&:hover, &:focus': {
        color: 3
      },
      '&:active': {
        color: 5
      }
    },
    li: {
      a: {
        color: 'primary',
        '&:hover, &:focus': {
          color: 3
        },
        '&:active': {
          color: 5
        }
      }
    },
    em: {
      fontWeight: 'body',
      fontStyle: 'italic',
      fontVariationSettings: 'body-italic',
    },
    strong: {
      fontWeight: 'heading',
      fontStyle: 'normal',
      fontVariationSettings: 'heading-normal',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      padding: 3,
      borderLeftWidth: 2,
      borderLeftStyle: 'solid',
      borderLeftColor: 3,
      backgroundColor: 'muted',
      color: 'primary',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
      backgroundColor: 'muted',
      color: 'primary',
      ...utils.inline('padding', 1),
      ...utils.inline('margin', 1),
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      width: '100%',
    },
    blockquote: {
      borderLeftStyle: 'solid',
      borderLeftColor: 3,
      borderLeftWidth: 2,
      backgroundColor: 'background',
      color: 'primary',
      margin: 0,
      marginInlineStart: -3,
      ...utils.inline('padding', 3),
      ...utils.block('padding', 1),
      fontStyle: 'italic',
    },
  },
};

export default base;

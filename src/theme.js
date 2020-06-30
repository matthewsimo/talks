const maybe = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#609',
    modes: {
      dark: {
        text: '#fff',
        background: '#222',
        primary: '#0cf',
        secondary: '#90c',
      },
    },
  },
  fontSizes: [14, 18, 24, 32, 36, 42, 50, 64, 96],
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 800,
  },
  lineHeights: {
    body: 1.32,
    heading: 1.125,
  },
  letterSpacings: {
    body: '-0.014em',
    heading: '-0.022em',
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: 'inherit',
    variable: "'Inter var', sans-serif",
    monospace: 'Menlo, monospace',
  },
  text: {
    default: {
      color: 'text',
      fontSize: [1, 2, null],
      fontWeight: 'body',
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
    },
    h1: {
      variant: 'text.heading',
      fontSize: [5, 6, 7],
    },
    h2: {
      variant: 'text.heading',
      fontSize: [4, 5, 6],
    },
    h3: {
      variant: 'text.heading',
      fontSize: [3, 4, 5],
    },
    h4: {
      variant: 'text.heading',
      fontSize: [2, 3, 4],
    },
    h5: {
      variant: 'text.heading',
      fontSize: [1, 2, 3],
    },
    h6: {
      variant: 'text.heading',
      fontSize: [0, 1, 2],
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
  },
};

const heading = {
  color: 'text',
  fontFamily: 'inherit',
  lineHeight: 'heading',
  fontWeight: 'heading',
  fontVariationSettings: 'heading-normal',
  overflowWrap: 'anywhere',
};

const hue = '200';
const saturation = '50%';
const lightness = [6, 16, 25, 35, 50, 65, 75, 88, 96];

const getColor = (l) => `hsl(${hue}, ${saturation}, ${l}%)`;

const colorScale = lightness.map((l) => getColor(l));
console.log({ lightness, colorScale });

const colors = {
  ...colorScale,
  text: colorScale[0],
  background: colorScale[8],
  primary: colorScale[4],
  secondary: colorScale[6],
  muted: colorScale[7],
  modes: {
    dark: {
      text: colorScale[8],
      background: colorScale[0],
      primary: colorScale[4],
      secondary: colorScale[6],
      muted: colorScale[1],
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
};

export const base = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: [0, 3, 5, 8, 25],
  fonts: {
    body: "'Inter', sans-serif",
    heading: 'inherit',
    variable: "'Inter var', sans-serif",
    monospace: 'Menlo, monospace',
  },
  fontVariationSettings,
  fontSizes: [14, 18, 21, 24, 28, 32, 48, 64, 96],
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 700,
  },
  fontStyles: {
    normal: 'normal',
    italic: 'italic',
  },
  letterSpacings: {
    body: '-0.014em',
    ...['-0.006em', '-0.014em', '-0.018em', '-0.019em', '-0.021em', '-0.022em'],
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors,
  layout: {
    container: {
      backgroundColor: 'background',
      borderRadius: 1,
      padding: 4,
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      padding: 3,
      backgroundColor: 'text',
      '@supports (font-variation-settings: normal)': {
        fontFamily: 'variable',
        fontVariationSettings: 'body-normal',
      },
    },
    h1: {
      ...heading,
      fontSize: 7,
      letterSpacing: 5,
    },
    h2: {
      ...heading,
      fontSize: 6,
      letterSpacing: 5,
    },
    h3: {
      ...heading,
      fontSize: 5,
      letterSpacing: 5,
    },
    h4: {
      ...heading,
      fontSize: 4,
      letterSpacing: 4,
    },
    h5: {
      ...heading,
      fontSize: 3,
      letterSpacing: 3,
    },
    h6: {
      ...heading,
      fontSize: 0,
      letterSpacing: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'inherit',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
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
      borderLeftColor: 'text',
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
      maxWidth: '100%',
    },
    blockquote: {
      borderLeftStyle: 'solid',
      borderLeftColor: 'text',
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

import { Box, Heading, useColorMode } from 'theme-ui';
import { utils } from 'lib/theme';

const PostIntro = ({ sx = {}, src, title, meta, tone = 'dark', imgSizing = 'cover' }) => {
  const [colorMode, _] = useColorMode();

  const textShadow = utils.getTextShadowForTone(tone, { dark: 'darkTitle', light: 'lightTitle' });
  let color;
  // Background image wants dark text
  if (tone === 'dark') {

    color = colorMode === 'dark' ?
      'text' : 'background';

    // Else show light text
  } else {

    color = colorMode === 'dark' ?
      'background' : 'text';

  }

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: [`auto`, `auto`, `100vw`],
        ...utils.inline('margin', [-3, -4, -5]),
        ...utils.inline('padding', [3, 4, 5]),
        marginBottom: [3, 4, 5],
        paddingTop: [5, 6],
        paddingLeft: [3, 6, 6],
        backgroundImage:
          `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: imgSizing,
        backgroundPosition: 'center center',
        display: ['flex', 'block'],
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        ...sx
      }}
    >

      <Heading
        variant="post-title"
        as="h1"
        sx={{
          color,
          textShadow,
        }}
      >
        {title}
      </Heading>
      <Heading
        variant="post-meta"
        as="h3"
        sx={{
          color,
          textShadow,
        }}
      >
        {meta}
      </Heading>
    </Box>
  );
};

export default PostIntro;

import React from 'react';
import { Box, Image } from 'theme-ui';
import { utils } from 'lib/theme';
/*
        ':before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        },
*/

const PostPreviewImage = ({ src, sx = {}, boxSx = {} }) => {
  return (
    <Box
      sx={{
        ...utils.inline('margin', (theme) => [
          -(theme.space[3] + theme.space[1]),
          -(theme.space[4] + theme.space[2]),
          -(theme.space[4] + theme.space[3]),
        ]),
        display: 'flex',
        background: (theme) =>
          `linear-gradient(345deg, ${theme.colors[7]} 0%, ${theme.colors[5]} 35%, ${theme.colors[2]} 100%)`,
        ...utils.block('margin', (theme) => [
          theme.space[3] + theme.space[1],
          theme.space[4] + theme.space[2],
          theme.space[4] + theme.space[3],
        ]),
        ...boxSx,
      }}
    >
      <Image
        sx={{
          position: 'relative',
          filter: 'grayscale(1)',
          width: '100%',
          mixBlendMode: 'luminosity',
          ...sx,
        }}
        src={src}
      />
    </Box>
  );
};

export default PostPreviewImage;

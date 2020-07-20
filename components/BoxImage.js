import React from 'react';
import { Box, Image } from 'theme-ui';
import { utils } from 'lib/theme';

const BoxImage = ({ src, sx = {}, boxSx = {} }) => {
  return (
    <Box
      sx={{
        ...utils.inline('margin', (theme) => [
          -(theme.space[3] + theme.space[1]),
          -(theme.space[4] + theme.space[2]),
          -(theme.space[4] + theme.space[3]),
        ]),
        ...utils.block('margin', (theme) => [
          theme.space[3] + theme.space[1],
          theme.space[4] + theme.space[2],
          theme.space[4] + theme.space[3],
        ]),
        ...boxSx,
      }}
    >
      <Image sx={{ width: '100%', ...sx }} src={src} />
    </Box>
  );
};

export default BoxImage;

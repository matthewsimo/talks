import React from 'react';
import { Box } from 'theme-ui';
import { utils } from 'src/theme';

const Icon = ({ title, link, ...props }) => {
  return (
    <Box
      as="svg"
      sx={{ verticalAlign: 'middle', ...utils.inline('margin', 1) }}
      {...props}
    >
      {title && <title>{title}</title>}
      {link && <use xlinkHref={link} />}
    </Box>
  );
};

export default Icon;

import React from 'react';
import { Text, IconButton, useColorMode } from 'theme-ui';
import { Sun, Moon } from 'react-feather';

const ToggleColorButton = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <IconButton
      sx={{
        lineHeight: 1,
        padding: 2,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}

      title={colorMode === 'dark' ? "Go Light" : "Go Dark"}
    >
      {colorMode === 'dark' ? (
        <>
          <Sun />
          { /*
          <Text pl={2} pr={2}>
            Go Light
          </Text>
          */}
        </>
      ) : (
          <>
            <Moon />
            { /*
          <Text pl={2} pr={2}>
            Go Dark
          </Text>
          */ }
          </>
        )}
    </IconButton>
  );
};

export default ToggleColorButton;

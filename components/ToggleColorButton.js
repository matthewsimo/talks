import React from 'react';
import { Text, Button, useColorMode } from 'theme-ui';
import { Sun, Moon } from 'react-feather';

const ToggleColorButton = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Button
      sx={{
        lineHeight: 1,
        padding: 2,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'muted',
        color: 'primary',
      }}
      onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
    >
      {colorMode === 'dark' ? (
        <>
          <Sun />
          <Text pl={2} pr={2}>
            Go Light
          </Text>
        </>
      ) : (
        <>
          <Moon />
          <Text pl={2} pr={2}>
            Go Dark
          </Text>
        </>
      )}
    </Button>
  );
};

export default ToggleColorButton;

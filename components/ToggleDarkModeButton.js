import Moon from './Icons/Moon';
import Sun from './Icons/Sun';
import { useState, useCallback, useEffect } from 'react';
import { focusClasses } from './Link';

export default function ToggleDarkModeButton({ className = `` }) {
  const [mode, setMode] = useState('light');
  const [listenerDisabled, setListenerDisabled] = useState(false);

  // Initial Effect, update mode on mount
  useEffect(() => {
    if (!window.matchMedia) return;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches) {
      setMode('dark');
    }
  }, []);

  // OS Mode Event Handler, update `mode`, only IF we haven't updated via button
  const matchListener = useCallback(
    (e) => {
      if (listenerDisabled) return;
      setMode(e.matches ? 'dark' : 'light');
    },
    [listenerDisabled]
  );

  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (listenerDisabled) {
      prefersDark.removeEventListener('change', matchListener);
    } else {
      prefersDark.addEventListener('change', matchListener);
    }
    return () => prefersDark.removeEventListener('change', matchListener);
  }, [mode, matchListener, listenerDisabled]);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();

      const prop = (index) => `--primary-lightness-${index}`;
      const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

      const newValues = indices.map((v, i, a) =>
        getComputedStyle(document.documentElement)
          .getPropertyValue(prop(a[a.length - 1 - i]))
          .trim()
      );

      newValues.map((v, i) => {
        document.documentElement.style.setProperty(prop(i), v);
      });

      if (!listenerDisabled) {
        setListenerDisabled(true);
      }
      setMode(mode === 'dark' ? 'light' : 'dark');
    },
    [mode, listenerDisabled]
  );

  const IconComponent = mode === 'dark' ? Sun : Moon;

  return (
    <button
      className={`text-main fill-current text-2xl w-5 h-5 ${focusClasses} ${className} `}
      onClick={handleClick}
    >
      <IconComponent />
    </button>
  );
}

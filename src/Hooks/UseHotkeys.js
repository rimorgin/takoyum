import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

const useHotkeys = (keys, callback, node = null) => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  const handleKeyPress = useCallback((event) => {
    const keyNames = new Set(keys.map(key => key.toLowerCase()));
    const activeKeys = new Set([
      event.ctrlKey && 'control',
      event.shiftKey && 'shift',
      event.altKey && 'alt',
      event.metaKey && 'meta',
      event.key.toLowerCase()
    ].filter(Boolean));

    const allKeysPressed = [...keyNames].every(key => activeKeys.has(key.toLowerCase()));

    if (allKeysPressed) {
      event.preventDefault();
      callbackRef.current(event);
    }
  }, [keys]);

  useEffect(() => {
    const targetNode = node ?? document;
    if (targetNode) {
      targetNode.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      if (targetNode) {
        targetNode.removeEventListener('keydown', handleKeyPress);
      }
    };
  }, [handleKeyPress, node]);
};

export default useHotkeys;

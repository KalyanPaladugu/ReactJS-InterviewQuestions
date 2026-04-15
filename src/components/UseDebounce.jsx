import { useState, useEffect } from 'react';

/**
 * @param {any} value - The value that changes frequently (e.g., input text)
 * @param {number} delay - The "quiet period" in milliseconds
 * @returns {any} - The value only after the delay has passed
 */
 const UseDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update the debounced value
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // CLEANUP: If the user types again before the delay finishes,
    // this clears the previous timer and starts a new one.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default UseDebounce;
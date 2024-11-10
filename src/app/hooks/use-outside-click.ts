import React, { useEffect } from "react";

// Define the type for the callback function
type CallbackType = (event: MouseEvent | TouchEvent) => void;

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: CallbackType
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Cast event.target to HTMLElement to ensure proper type safety
      const target = event.target as HTMLElement;

      if (!ref.current || ref.current.contains(target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

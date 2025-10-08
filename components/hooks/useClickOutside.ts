import { useEffect } from "react";
import type { RefObject } from "react";

export default function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!(event.target instanceof Node)) {
        return;
      }
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event as MouseEvent | TouchEvent);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

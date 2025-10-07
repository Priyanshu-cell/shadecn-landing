// components/useClickOutside.ts

import { useEffect } from 'react';
import type { RefObject } from 'react';

// The listener function now accepts the general 'Event' type
export default function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    // We explicitly define the listener to accept the broader Event type
    const listener = (event: Event) => {
      // Use a Type Guard to ensure the event has a target property that is a DOM Node
      if (!(event.target instanceof Node)) {
        return;
      }

      // Check if the click is on the ref's element or a descendant
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      
      // Call the handler function with the narrowed event type
      // We safely cast the event here, as we only need the basic properties for the handler
      handler(event as MouseEvent | TouchEvent);
    };

    // Both mousedown and touchstart are added. TypeScript now accepts this
    // because the listener's signature (event: Event) is compatible with both.
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
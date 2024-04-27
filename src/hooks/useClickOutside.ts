import { useEffect, useRef } from "react";

export default function useClickOutside<T extends HTMLElement>(
  handler: () => void
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    function listener(event: MouseEvent) {
      const target = event.target;
      if (target !== null && ref.current?.contains(target as T)) {
        handler();
      }
    }
    addEventListener("click", listener, true);
    return removeEventListener("click", listener, true);
  }, []);
  return { ref };
}

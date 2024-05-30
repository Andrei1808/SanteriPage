import { useEffect, useRef, useState } from "react";

export default function outsideClick(initialIsVisible: boolean) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    console.log(ref.current);
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click",  handleClickOutside, true);
    return () => {
      document.removeEventListener("click", () => handleClickOutside, true);
    };
  });

  return { ref, isVisible, setIsVisible };
}

// Может ьудет не нужен, тогда удали!!!

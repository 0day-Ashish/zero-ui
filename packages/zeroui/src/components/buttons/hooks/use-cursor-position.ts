"use client";

import { useState, useEffect, RefObject, useCallback } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

export function useCursorPosition(
  ref: RefObject<HTMLElement | null>,
  enabled: boolean = true
): CursorPosition {
  const [position, setPosition] = useState<CursorPosition>({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);

    setPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  }, [ref]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 50, y: 50 });
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, enabled, handleMouseMove, handleMouseLeave]);

  return position;
}

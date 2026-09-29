"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";

type LazyIslandProps<P extends object> = {
  /**
   * Dynamic import of the interactive component. Must live in client code so
   * the bundler can split it into its own chunk.
   */
  load: () => Promise<ComponentType<P>>;
  /** Props handed to the component once it mounts. Serializable. */
  componentProps: P;
  /**
   * Server-rendered stand-in. This is what ships in the HTML, so it should be
   * the real content (not a spinner) to keep the page crawlable and stable.
   */
  placeholder: ReactNode;
  /**
   * How far ahead of the viewport to start loading. Generous by default so the
   * component is interactive before the user scrolls to it.
   */
  rootMargin?: string;
  /**
   * Window event that should also force the component to load, for cases where
   * something elsewhere on the page needs it mounted right now.
   */
  loadOnEvent?: string;
};

/**
 * Defers a client component's JavaScript until it is nearly on screen.
 *
 * The placeholder is server-rendered, so the markup, layout and any indexable
 * content are present on first paint; only the interactivity arrives later.
 * This keeps heavy islands (the appeal wizard, the US map) out of the initial
 * bundle without hiding anything from crawlers or shifting layout.
 */
export function LazyIsland<P extends object>({
  load,
  componentProps,
  placeholder,
  rootMargin = "600px",
  loadOnEvent,
}: LazyIslandProps<P>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [Component, setComponent] = useState<ComponentType<P> | null>(null);
  const startedRef = useRef(false);

  const start = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    void load().then((resolved) => {
      // Store the component itself, not a factory: setState would call it.
      setComponent(() => resolved);
    });
  }, [load]);

  useEffect(() => {
    if (Component) return;

    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      queueMicrotask(start);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          start();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [Component, rootMargin, start]);

  useEffect(() => {
    if (!loadOnEvent || Component) return;
    window.addEventListener(loadOnEvent, start);
    return () => window.removeEventListener(loadOnEvent, start);
  }, [Component, loadOnEvent, start]);

  // A keyboard user can tab into the placeholder before it scrolls into view,
  // and a fast scroll can outrun the observer. Both hand off to the same guard.
  return (
    <div
      ref={containerRef}
      onPointerEnter={start}
      onFocusCapture={start}
      onTouchStart={start}
    >
      {Component ? <Component {...componentProps} /> : placeholder}
    </div>
  );
}

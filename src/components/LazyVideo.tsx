import { useEffect, useRef } from "react";

/**
 * Plays a muted looping video only while it is on screen, and pauses it
 * otherwise — so we never decode more videos than are actually visible.
 * Keeps page scrolling and CPU light.
 */
export function LazyVideo({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

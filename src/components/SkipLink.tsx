"use client";

/*
 * Skip link pointing to the actual page content.
 *
 * The default jump to #main-content landed at the start of the <main> landmark,
 * which is visually around the header and hero banner - keyboard users still
 * had to scroll further. So the target is #main-start (the first content below
 * the hero), and #main-content remains a safe fallback for subpages that do not
 * define that marker.
 */
export default function SkipLink() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target =
      document.getElementById("main-start") ||
      document.getElementById("main-content");

    if (!target) return;

    event.preventDefault();
    target.focus();
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <a href="#main-content" className="skip-link" onClick={handleClick}>
      Skip to main content
    </a>
  );
}

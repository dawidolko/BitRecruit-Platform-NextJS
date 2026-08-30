"use client";

/*
 * Skip link kierujacy do wlasciwej tresci strony.
 *
 * Domyslny skok pod #main-content ladowal na poczatku landmarku <main>,
 * czyli wizualnie w okolicach naglowka i banera hero — uzytkownik klawiatury
 * i tak musial przewijac dalej. Dlatego celem jest #main-start (pierwsza
 * tresc pod hero), a #main-content pozostaje bezpiecznym fallbackiem dla
 * podstron, ktore takiego znacznika nie definiuja.
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

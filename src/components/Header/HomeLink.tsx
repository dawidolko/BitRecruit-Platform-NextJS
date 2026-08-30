"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

type HomeLinkProps = {
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

/*
 * Link do strony glownej, ktory zawsze konczy sie na jej gorze.
 *
 * Samo <Link href="/"> nie wystarcza w dwoch przypadkach:
 *  - gdy jestesmy juz na "/" (np. z parametrami filtrow w query string),
 *    Next.js nie wykonuje nawigacji, wiec strona zostaje tam, gdzie byla;
 *  - przywracanie pozycji scrolla przez przegladarke potrafi cofnac widok
 *    na dol strony tuz po przejsciu.
 *
 * Dlatego przy kliknieciu czyscimy query string i jawnie przewijamy na gore.
 */
export default function HomeLink({
  className,
  ariaLabel,
  children,
}: HomeLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    /*
     * Nie przechwytujemy klikniec modyfikowanych ani srodkowym przyciskiem —
     * uzytkownik chce wtedy otworzyc nowa karte.
     */
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();

    if (pathname !== "/") {
      router.push("/");
    } else {
      /*
       * Usuwamy parametry filtrow bez dodawania wpisu do historii —
       * cofniecie ma wrocic tam, gdzie uzytkownik byl wczesniej.
       */
      window.history.replaceState(null, "", "/");
    }

    /*
     * Na tej stronie elementem przewijanym jest <body>, a nie
     * documentElement — window.scrollTo() nie ma tu zadnego efektu.
     * Przewijamy wiec kazdy z kandydatow; ten, ktory nie jest scrollerem,
     * zignoruje wywolanie.
     */
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";

    for (const element of [
      document.body,
      document.documentElement,
    ] as HTMLElement[]) {
      element.scrollTo?.({ top: 0, behavior });
    }
    window.scrollTo({ top: 0, behavior });
  };

  return (
    <Link
      href="/"
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

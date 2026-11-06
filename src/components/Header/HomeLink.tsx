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
 * Link to the home page that always lands at its top.
 *
 * A plain <Link href="/"> is not enough in two cases:
 *  - when we are already on "/" (e.g. with filter params in the query string),
 *    Next.js does not navigate, so the page stays where it was;
 *  - the browser's scroll position restoration can move the view back down the
 *    page right after the transition.
 *
 * So on click we clear the query string and explicitly scroll to the top.
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
     * We do not intercept modified or middle-button clicks - the user wants to
     * open a new tab in that case.
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
       * Remove the filter params without adding a history entry - going back should
       * return to where the user was before.
       */
      window.history.replaceState(null, "", "/");
    }

    /*
     * On this page the scrolling element is <body>, not documentElement -
     * window.scrollTo() has no effect here. So we scroll each candidate; the one
     * that is not the scroller ignores the call.
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

import type { Metadata } from "next";
import Link from "next/link";

import s from "./styles.module.scss";

export const metadata: Metadata = {
  title: "Page not found — BitRecruit",
  description: "This address does not exist on BitRecruit. Go back to the job offers.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className={`container-lg ${s.notFound}`}>
      <p>404</p>
      <h1>Page not found</h1>
      <p>The address may be mistyped, or the page may have moved.</p>
      <Link href="/">Back to the job offers</Link>
    </main>
  );
}

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const figtreeBold = localFont({
  src: '../fonts/figtree-700-latin.woff2',
  variable: '--font-figtree-bold',
  display: 'swap',
  weight: '700',
});

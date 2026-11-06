import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const oenosBold = localFont({
  src: '../fonts/oenos-bold.woff2',
  variable: '--font-oenos-bold',
  display: 'swap',
  weight: '700',
});

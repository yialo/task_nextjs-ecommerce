import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const interFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marketplace',
  description: 'Laptops, phones, and more',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={interFont.className}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

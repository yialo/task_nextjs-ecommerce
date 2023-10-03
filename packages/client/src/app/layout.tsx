import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { APP_TITLE } from '@/shared/config';
import { PageHeader } from '@/widgets/page-header';
import './globals.css';

const interFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: APP_TITLE,
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={interFont.className}>
      <body>
        <PageHeader className="sticky top-0" />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

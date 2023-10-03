import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { EffectorNext } from '@effector/next';
import { APP_TITLE } from '@/shared/config';
import { PageHeader } from '@/widgets/page-header';
import './global.css';

const interFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: APP_TITLE,
  description: 'Women wear shop',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={interFont.className}>
      <body className="flex min-h-screen flex-col">
        <EffectorNext>
          <PageHeader className="sticky top-0 shrink-0" />
          {children}
        </EffectorNext>
      </body>
    </html>
  );
};

export default RootLayout;

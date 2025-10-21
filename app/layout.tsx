import type { Metadata } from 'next';
import './globals.css';
import 'modern-normalize';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import Header from '../components/Header/Header';

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <TanStackProvider>
          <Header />

          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}

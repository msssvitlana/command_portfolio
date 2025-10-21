import type { Metadata } from 'next';
import './globals.css';
import 'modern-normalize';
export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${inter.variable}`}>
        <TanStackProvider>
          <Header />

          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}

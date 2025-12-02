import type { Metadata } from 'next';
import './globals.css';
import 'modern-normalize';
import TanStackProvider from '@/components/Layout/TanStackProvider/TanStackProvider';
import Header from '../components/Layout/Header/Header';
import './palette.css';
import './shadow-palette.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: 'DevCraft — фронтенд розробка сайтів та додатків під ключ',
  icons: {
    icon: '/icons/favicon.ico',
  },
  description:
    'Створюємо сучасні вебсайти та фронтенд-додатки з нуля. Повний цикл розробки — від дизайну до продакшену.',
  keywords: [
    'фронтенд розробка',
    'створення сайтів',
    'розробка додатків',
    'веб-розробка Україна',
    'React розробка',
    'Next.js сайти',
    'сайт під ключ',
    'frontend розробники',
  ],
  openGraph: {
    title: 'DevCraft — професійна фронтенд розробка сайтів та додатків',
    description:
      'Пропонуємо комплексну розробку вебсайтів і додатків під ключ: дизайн, адаптивна верстка, інтеграція та оптимізація.',
    url: '',
    siteName: 'DevCraft',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'DevCraft — розробка сучасних сайтів та додатків',
      },
    ],
    type: 'website',
    locale: 'uk_UA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevCraft — створення сучасних сайтів та додатків',
    description:
      'Фахівці з фронтенду, які допоможуть втілити ваші ідеї у якісні вебпродукти. Вебсайти та додатки під ключ.',
    images: [''],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <TanStackProvider>
          <Header />

          <main>{children}</main>
          {modal}
        </TanStackProvider>
      </body>
    </html>
  );
}

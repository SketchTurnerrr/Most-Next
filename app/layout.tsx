import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/navbar';
import { NextIntlClientProvider } from 'next-intl';
import Footer from '@/components/footer';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

import { getTranslations } from 'next-intl/server';

export async function generateMetadata(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={'uk'}>
      <body className={` ${inter.variable} antialiased`}>
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="UA-122115964-1" />
    </html>
  );
}

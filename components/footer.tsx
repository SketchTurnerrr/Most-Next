import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <div className="mt-auto w-full text-center bg-gray-900 lg:h-96">
      <div className="pt-16 text-3xl text-gray-200 font-bold">
        {t('BC')} 2025
      </div>
      <div className="justify-center pt-10 lg:flex">
        <div className="px-10 pb-5 text-xl text-gray-200 font-bold">
          <Link href="/">{t('home')}</Link>
        </div>
        <div className="px-10 pb-5 text-xl text-gray-200 font-bold">
          <Link href="/ministries">{t('ministries')}</Link>
        </div>
        <div className="px-10 pb-5 text-xl text-gray-200 font-bold">
          <Link href="/about">{t('about')}</Link>
        </div>
        <div className="px-10 pb-5 text-xl text-gray-200 font-bold">
          <Link href="/listen">{t('listen')}</Link>
        </div>
      </div>
      <div className="px-3 py-12 text-gray-200 lg:mx-auto lg:w-1/2 lg:text-center text-md ">
        {t('p1')}
        <span className="text-pink-300">{t('love')}</span>
        {t('p2')}
        <span className="text-pink-300">{t('goodworks')}</span>, {t('p3')}
        <span className="text-pink-300">{t('meetings')}</span>, {t('p4')}
      </div>
    </div>
  );
}

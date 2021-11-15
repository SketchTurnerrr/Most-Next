import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation('footer');
  return (
    <div className='mt-16 text-center bg-gray-900 lg:h-96'>
      <div className='pt-16 text-3xl text-gray-200 fornt-bold'>
        {t('BC')} 2021
      </div>
      <div className='justify-center pt-10 lg:flex'>
        <div className='px-10 pb-5 text-xl text-gray-200 fornt-bold'>
          <Link href='/'>
            <a>{t('home')}</a>
          </Link>
        </div>
        <div className='px-10 pb-5 text-xl text-gray-200 fornt-bold'>
          <Link href='/ministries'>
            <a>{t('ministries')}</a>
          </Link>
        </div>
        <div className='px-10 pb-5 text-xl text-gray-200 fornt-bold'>
          <Link href='/about'>
            <a>{t('about')}</a>
          </Link>
        </div>
        <div className='px-10 pb-5 text-xl text-gray-200 fornt-bold'>
          <Link href='/listen'>
            <a>{t('listen')}</a>
          </Link>
        </div>
      </div>
      <div className='px-3 py-12 text-gray-200 lg:mx-auto lg:w-1/2 lg:text-center text-md '>
        {t('p1')}
        <span className='text-pink-300'>{t('love')}</span>
        {t('p2')}
        <span className='text-pink-300'>{t('goodworks')}</span>, {t('p3')}
        <span className='text-pink-300'>{t('meetings')}</span>, {t('p4')}
      </div>
    </div>
  );
}

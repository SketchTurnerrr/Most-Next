import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';
import Image from 'next/image';
import Head from 'next/head';

export default function About() {
  const { t } = useTranslation('about');
  return (
    <Layout>
      <Head>
        <title>{t('about')}</title>
      </Head>
      <div className='flex items-center justify-center p-5 mx-auto'>
        {/* <div className='p-10'> */}
        <Image
          className='rounded-full'
          src='https://res.cloudinary.com/deprog/image/upload/c_scale,w_400/v1633628287/20286898_10155565584073695_5766809939245010134_o_fjhlng.jpg'
          alt='Daryl'
          width={200}
          height={200}
        />
        <span className='px-2'></span>
        <Image
          className='rounded-full'
          src='https://res.cloudinary.com/deprog/image/upload/v1633624413/IMG_4194--min_sotttw.jpg'
          alt='Molly'
          width={200}
          height={200}
        />
        {/* </div> */}
      </div>
      <section className='max-w-3xl mx-auto'>
        <div>
          <div className='text-4xl font-semibold text-center lg:my-5'>
            {t('DMP')}
          </div>
          <p className='p-5 mb-5 text-lg leading-relaxed text-gray-700 lg:p-0'>
            {t('p1')}
          </p>
          <p className='p-5 mb-5 text-lg leading-relaxed text-gray-700 lg:p-0'>
            {t('p2')}
          </p>
        </div>
      </section>

      <div className='flex flex-wrap items-center justify-center my-10 text-lg font-semibold'>
        <div className='items-center text-center'>
          <img
            className='w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44'
            src='https://res.cloudinary.com/deprog/image/upload/c_scale,q_66,w_400/v1633629367/AdamLuba_strg7d.jpg'
            alt='photo of Adam Luba and Tima'
          />
          <span>{t('A&L')}</span>
        </div>
        <div className='items-center text-center'>
          <img
            className='w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44'
            src='https://res.cloudinary.com/deprog/image/upload/c_scale,w_400/v1633629883/Vika_srthqf.jpg'
            alt='photo of Vika'
          />
          <span>{t('Vika')}</span>
        </div>
        <div className='items-center text-center'>
          <img
            className='w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44'
            src='https://res.cloudinary.com/deprog/image/upload/v1633629359/Roma_bsaue8.jpg'
            alt='photo of Roma'
          />
          <span>{t('Roma')}</span>
        </div>
      </div>
      <section className='max-w-3xl p-5 mx-auto'>
        <div className='text-center'>
          <h1 className='text-4xl font-semibold'>{t('WHAT_WE_BELIEVE')}</h1>
        </div>
        <div className='my-4 text-3xl font-semibold'>{t('SCRIPTURES')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>
          {t('SCRIPTURES_P')}
        </p>
        <div className='my-4 text-3xl font-semibold'>{t('GOD')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>{t('GOD_P')}</p>
        <div className='my-4 text-3xl font-semibold'>{t('JC')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>{t('JC_P')}</p>
        <div className='my-4 text-3xl font-semibold'>{t('HS')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>{t('HS_P')}</p>
        <div className='my-4 text-3xl font-semibold'>{t('HUMANITY')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>{t('HUMANITY_P')}</p>
        <div className='my-4 text-3xl font-semibold'>{t('CHURCH')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>{t('CHURCH_P')}</p>
        <div className='my-4 text-3xl font-semibold'>{t('DISCIPLESHIP')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>
          {t('DISCIPLESHIP_P')}
        </p>
        <div className='my-4 text-3xl font-semibold'>{t('FUTURE')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>{t('FUTURE_P')}</p>

        <div className='w-3/4 pl-4 mx-auto bg-blue-100 border-l-4 border-blue-500 rounded'>
          <p>{t('BLOCKQUOTE')}</p>
          <p className='pl-5'>{t('BLOCKQUOTE1')}</p>
          <p className='pl-5'>{t('BLOCKQUOTE2')}</p>
        </div>
      </section>
      <div className='max-w-5xl mx-auto mt-10 text-3xl font-semibold text-center lg:text-4xl'>
        {t('DISTINCTIVES')}
      </div>
      <section className='max-w-3xl p-5 mx-auto'>
        <div className='my-4 text-2xl font-semibold'>{t('D1')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>{t('D1P1')}</p>
        <div className='my-4 text-2xl font-semibold'>{t('D2')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>{t('D2P1')}</p>
        <div className='my-4 text-2xl font-semibold'>{t('D3')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>{t('D3P')}</p>
        <div className='my-4 text-2xl font-semibold'>{t('D4')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>{t('D4P')}</p>
        <div className='my-4 text-2xl font-semibold'>{t('D5')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>{t('D5P')}</p>
        <div className='my-4 text-2xl font-semibold'>{t('D6')}</div>
        <p className='w-full mb-10 text-lg text-gray-700'>{t('D6P1')}</p>
        <p className='w-full mb-10 text-lg text-gray-700'>{t('D6P2')}</p>
        <div className='my-4 text-4xl font-bold'>{t('WHO_WE_ARE')}</div>
        <p className='w-full mb-5 text-lg text-gray-700'>
          {t('WHO_WE_ARE_SUB')}
        </p>
        <p className='w-full mb-10 text-lg text-gray-700'>
          {t('WHO_WE_ARE_SUB1')}
        </p>
        <div className='pl-4 mb-10 ml-5 border-l-8 border-blue-500'>
          <p className='pl-2 font-bold'>{t('WHO_WE_ARE_SUB2')}</p>
          <p className='pl-2 font-bold'>{t('WHO_WE_ARE_SUB3')}</p>
          <p className='pl-2 font-bold'>{t('WHO_WE_ARE_SUB4')}</p>
          <p className='pl-2 font-bold'>{t('WHO_WE_ARE_SUB5')}</p>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['about', 'common', 'navbar'])),
  },
});

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Bridge Church Kryvyi Rih' />
        <meta name='og:title' content='Bridge Church' />
        <title>{t('BC')}</title>
      </Head>
      {/* <-- Hero --> */}
      <section className='relative flex items-center content-center justify-center h-screen'>
        <div
          className='absolute w-full h-full bg-center bg-cover'
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/deprog/image/upload/q_30/v1633624416/main-cover_rg6wvu.jpg)',
          }}
        ></div>
        <div className='container relative mx-auto'>
          <div className='flex flex-wrap items-center'>
            <div className='w-full'>
              <h1 className='px-3 text-4xl font-bold leading-snug text-center text-white uppercase text-shadow md:text-5xl lg:text-8xl'>
                {t('EFCU')}
              </h1>

              <h2 className='px-3 pt-4 text-2xl italic text-center text-white md:pt-16 text-shadow lg:text-4xl'>
                {t('goal')}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* <-- Location --> */}
      <section className='container mx-auto my-10'>
        <div className='justify-center md:bg-white md:flex'>
          {/* where and map div */}
          <div className='items-center md:flex md:w-full'>
            <div className='mx-5'>
              <div className='mt-5 mb-2 text-4xl font-semibold md:mt-0'>
                {t('WHERE')}?
              </div>
              <div className='font-medium text-gray-500'>{t('WHEREL')}</div>
              <div className='mt-5 mb-2 text-4xl font-semibold'>
                {t('WHEN')}?
              </div>
              <div className='font-medium text-gray-500'>
                {t('EVERY_SUNDAY')}
              </div>
              <div className='mt-5 mb-2 text-4xl font-semibold'>
                {t('CONTACT')}
              </div>
              <div className='font-medium text-gray-500'>narekbc@gmail.com</div>
            </div>

            {/* <--Google Map --> */}

            <div className='md:flex-grow'>
              <iframe
                className='w-full my-8 md:my-0'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1732.903967411718!2d33.41277443250386!3d47.94599268689437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dadf8bb7a6beb9%3A0x56378ced765fcdec!2z0KXQsNGA0YbQuNC30YzQutCwINCy0YPQu9C40YbRjywgMTg4LCDQmtGA0LjQstC40Lkg0KDRltCzLCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNTAwMDA!5e0!3m2!1suk!2sua!4v1630130946495!5m2!1suk!2sua'
                height='300'
                style={{ border: 0 }}
                allowFullScreen={false}
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* <-- LATEST SERMON --> */}
      <div className='container mx-auto'>
        <div className='items-center justify-center pb-4 lg:flex'>
          <div className='w-full lg:flex'>
            <div
              className='flex-none h-64 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-96 lg:rounded-t-none lg:rounded-l'
              style={{
                backgroundImage: `url(https://res.cloudinary.com/deprog/image/upload/c_scale,w_550/v1633624412/JOHN_gnnzs8.jpg)`,
                backgroundPosition: 'center',
              }}
              title='Gospel of John poster'
            ></div>
            <div className='flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r rounded-b md:flex-grow lg:w-md border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light lg:rounded-b-none lg:rounded-r'>
              <div className='mb-8'>
                <div className='h-6 mb-8 text-4xl font-bold text-black'>
                  {t('latest')}
                </div>
                <div className='mt-5 text-xl font-semibold'>
                  {t('latest_title')}
                </div>
                <div className='mt-2 font-medium text-gray-500'>
                  {t('OCTOBER')} 3, 2021
                </div>

                <audio
                  className='w-full mt-5'
                  controls='controls'
                  preload='metadata'
                  src='https://archive.org/download/2020-12-27/2020_12_27.mp3'
                  type='audio/mpeg'
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'navbar'])),
  },
});

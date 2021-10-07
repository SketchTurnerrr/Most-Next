import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import Image from 'next/image';
import Head from 'next/head';

export default function Ministries() {
  const { t } = useTranslation('ministries');

  return (
    <Layout>
      <Head>
        <title>{t('ministries')}</title>
      </Head>
      <div>
        {/* Sunday DIV*/}
        <div className='max-w-screen-xl pb-8 mx-auto md:py-24 md:px-5'>
          <div className='flex-row-reverse items-center justify-between md:flex'>
            <div className='p-4'>
              <Image
                src='https://res.cloudinary.com/deprog/image/upload/c_scale,q_65,w_1980/v1633624452/Sunday_tfpp43.jpg'
                alt='Worship Service'
                height={493}
                width={900}
              />
            </div>
            <div>
              <h1 className='px-4 py-0 text-4xl font-bold lg:text-7xl'>
                {t('SUNDAY_SERV')}
              </h1>
              <p className='max-w-2xl p-4 text-lg'>{t('SUNDAY_P')}</p>
            </div>
          </div>
        </div>

        {/* Tuesday DIV */}
        <div className='max-w-screen-xl mx-auto md:py-24 md:px-5'>
          <div className='items-center justify-between md:flex'>
            <div className='p-4'>
              <Image
                src='https://res.cloudinary.com/deprog/image/upload/q_46/v1633624412/Home-Group_nbjhf8.jpg'
                alt='Home Group photo'
                height={960}
                width={640}
              />
            </div>
            <div>
              <div className='px-4 py-0 text-4xl font-bold lg:text-7xl'>
                {t('TBS')}
              </div>
              <p className='max-w-2xl p-4 text-lg text-gray-800'>
                {t('TUESDAY_P')}
              </p>
            </div>
          </div>
        </div>

        {/* Sunday School DIV */}
        <div className='max-w-screen-xl mx-auto md:py-24 md:px-5'>
          <div className='flex-row-reverse items-center justify-between md:flex'>
            <div className='p-4'>
              <Image
                src='https://res.cloudinary.com/deprog/image/upload/v1633624412/School_gr3qsc.jpg'
                alt='Classroom photo'
                height={480}
                width={640}
              />
            </div>
            <div>
              <div className='px-4 py-0 text-4xl font-bold lg:text-7xl'>
                {t('SUNDAY_SCHOOL')}
              </div>
              <p className='max-w-2xl p-4 text-lg text-gray-800'>
                {t('SUNDAY_SCHOOL_P')}
              </p>
            </div>
          </div>
        </div>

        {/* Youth DIV */}
        <div className='max-w-screen-xl mx-auto md:py-24 md:px-5'>
          <div className='items-center justify-between md:flex'>
            <div className='p-4'>
              <Image
                src='https://res.cloudinary.com/deprog/image/upload/c_scale,q_58,w_574/v1633624418/Youth_whtqwx.jpg'
                alt='A girl beside a wall'
                height={575}
                width={575}
              />
            </div>
            <div>
              <div className='px-4 py-0 text-4xl font-bold lg:text-7xl'>
                {t('YOUTH')}
              </div>
              <p className='max-w-2xl p-4 text-lg text-gray-800'>
                {t('YOUTH_P')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'ministries',
      'navbar',
      'common',
    ])),
  },
});

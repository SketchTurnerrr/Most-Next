import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Track from '../components/Tracks/Track';
import { useEffect, useState } from 'react';
import { API_URL } from '../config/index';
import SkeletonTrack from '../components/Tracks/SkeletonTrack';

const Listen = () => {
  const { t } = useTranslation('sermons');
  const [sermons, setSermons] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [disable, setDisable] = useState(false);
  const [tracksPerPage, setTracksPerPage] = useState(5);

  useEffect(() => {
    const fetchSermons = async () => {
      const response = await fetch(`${API_URL}/api/sermons`);

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const sermons = await response.json();
      setSermons(sermons);
      setLoading(false);
    };

    fetchSermons();
  }, []);

  const indexOfLastPost = 1 * tracksPerPage;
  const indexOfFirstPost = indexOfLastPost - tracksPerPage;
  const currentAmount = sermons.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Layout>
      <Head>
        <title>{t('sermons')}</title>
      </Head>
      <div className='bg-gradient-to-r from-blue-400 to-pink-300'>
        <h1 className='pb-10 font-bold text-center text-white text-7xl pt-72 text-shadow'>
          Sunday Sermons
        </h1>
      </div>
      {/* if there are tracks - render them */}
      {!isLoading && <Track sermons={currentAmount} />}
      {/* if it's loading show 5 placeholder tracks */}
      {isLoading && [1, 2, 3, 4, 5].map((i) => <SkeletonTrack key={i} />)}

      <div className='flex justify-center p-10'>
        <button
          disabled={disable}
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
          onClick={() => {
            setTracksPerPage(tracksPerPage + 5);
            currentAmount.length > 63 ? setDisable(true) : false;
          }}
        >
          {t('LOAD_MORE')}
        </button>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['sermons', 'navbar'])),
    },
  };
}

export default Listen;

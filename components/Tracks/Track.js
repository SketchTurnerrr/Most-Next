import { useTranslation } from 'next-i18next';

const Track = ({ sermons }) => {
  const { t } = useTranslation('sermons');
  return (
    <>
      {sermons.map((sermon) => (
        <div
          key={sermon.id}
          className='max-w-md mx-6 mt-10 overflow-hidden bg-white shadow-md md:mx-auto rounded-xl md:max-w-4xl'
        >
          <div className='md:flex'>
            <div className='md:flex-shrink-0'>
              <img
                className='object-cover w-full h-48 md:w-48'
                src={sermon.image}
                alt='The Gospel of John'
              />
            </div>
            <div className='w-full p-4 md:mt-4'>
              <h1 className='text-xl font-bold md:text-2xl'>
                {t(sermon.title)}
              </h1>
              <div className='mt-1 text-base font-medium text-gray-700'>
                {t(sermon.month)} {sermon.dayYear}
                <a href={sermon.url}> {t('DOWNLOAD')}</a>
              </div>
              <audio
                className='w-full mt-5'
                controls='controls'
                preload='metadata'
                src={sermon.url}
                type='audio/mpeg'
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Track;

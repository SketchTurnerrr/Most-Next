import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative flex items-center content-center justify-center h-screen">
        <div
          className="absolute w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/deprog/image/upload/q_30/v1633624416/main-cover_rg6wvu.jpg)',
          }}
        ></div>
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full">
              <h1 className="px-3 text-4xl font-bold leading-snug text-center text-slate-50 uppercase text-shadow md:text-5xl lg:text-8xl">
                {t('EFCU')}
              </h1>

              <h2 className="px-3 pt-4 text-2xl italic text-center text-white md:pt-16 text-shadow lg:text-4xl">
                {t('description')}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* <-- Location --> */}
      <section className="container mx-auto my-10 shadow-lg ">
        <div className="justify-center overflow-hidden rounded md:bg-background md:flex">
          {/* where and map div */}
          <div className="items-center md:flex md:w-full ">
            <div style={{ marginInline: '1.9rem' }}>
              <div className="mt-5 mb-2 text-4xl font-semibold md:mt-0">
                {t('WHERE')}?
              </div>
              <div className="font-medium text-gray-600">
                {t('WHERE_ADDRESS')}
              </div>
              <div className="mt-5 mb-2 text-4xl font-semibold">
                {t('WHEN')}?
              </div>
              <div className="font-medium text-gray-600">
                {t('EVERY_SUNDAY')}
              </div>
              <div className="mt-5 mb-2 text-4xl font-semibold">
                {t('CONTACT')}
              </div>
              <div className="font-medium text-gray-600">narekbc@gmail.com</div>
            </div>

            {/* <--Google Map --> */}

            <div className="md:grow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167.02887826851565!2d33.41293844027945!3d47.9467885468866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dadf67ac134e53%3A0xfc275fa2651c8f28!2z0KbQtdGA0LrQstCwICLQnNGW0YHRgiI!5e0!3m2!1suk!2sua!4v1754916009250!5m2!1suk!2sua"
                height="300"
                className="w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

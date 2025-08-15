import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function About() {
  const t = useTranslations('About');
  return (
    <div>
      <section className="max-w-3xl space-y-8 flex flex-col items-center justify-center p-5 mx-auto">
        <h2 className="text-4xl font-semibold">{t('JACK_ANYA')}</h2>
        <div className="flex gap-6 ">
          <Image src="/sergeevs.jpg" alt="Daryl" width={450} height={450} />
          <div className="flex flex-col gap-2">
            <p className="text-lg leading-relaxed ">{t('JACK_ANYA_P')}</p>
          </div>
        </div>
        <Image
          src="/evangelization.jpg"
          alt="Daryl"
          width={1000}
          height={1000}
        />
        <p className="text-lg leading-relaxed text-gray-700">
          {t('EVANGELIZATION_P')}
        </p>
        {/* <div className="pt-5 text-4xl font-semibold text-center ">
          {t('LT')}
        </div>
        <div className="flex flex-wrap items-center justify-center my-10 text-lg font-semibold">
          <div className="items-center text-center">
            <Image
              width={200}
              height={200}
              className="w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44"
              src="/RomaAlina.jpg"
              alt="photo of Adam Luba and Tima"
            />
            <span>{t('A&L')}</span>
          </div>
          <div className="items-center text-center">
            <Image
              width={200}
              height={200}
              className="w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44"
              src="/AdamLuba.jpg"
              alt="photo of Vika"
            />
            <span>{t('Vika')}</span>
          </div>
          <div className="items-center text-center">
            <Image
              width={200}
              height={200}
              className="w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44"
              src="https://res.cloudinary.com/deprog/image/upload/v1633629359/Roma_bsaue8.jpg"
              alt="photo of Roma"
            />
            <span>{t('Roma')}</span>
          </div>
        </div> */}
      </section>
      <div className="flex items-center justify-center p-5 mx-auto">
        <p className="text-2xl font-bold">↓ {t('BEFORE_FEBRUARY_24')} ↓</p>
      </div>
      {/* Daryl and Molly */}
      <div className="flex items-center justify-center p-5 mx-auto">
        <Image
          className="rounded-full"
          src="https://res.cloudinary.com/deprog/image/upload/c_scale,w_400/v1633628287/20286898_10155565584073695_5766809939245010134_o_fjhlng.jpg"
          alt="Daryl"
          width={200}
          height={200}
        />
        <span className="px-2"></span>
        <Image
          className="rounded-full"
          src="https://res.cloudinary.com/deprog/image/upload/v1633624413/IMG_4194--min_sotttw.jpg"
          alt="Molly"
          width={200}
          height={200}
        />
        {/* </div> */}
      </div>
      <section className="max-w-3xl mx-auto">
        <div>
          <h2 className="px-2 text-4xl font-semibold text-center lg:my-5">
            {t('DMP')}
          </h2>
          <p className="p-5 mb-5 text-lg leading-relaxed text-gray-700 lg:p-0">
            {t('p1')}
          </p>
          <p className="p-5 mb-5 text-lg leading-relaxed text-gray-700 lg:p-0">
            {t('p2')}
          </p>
        </div>
      </section>

      <section className="p-5">
        <h2 className="pt-5 text-4xl font-semibold text-center ">{t('LT')}</h2>
        <div className="flex flex-wrap items-center justify-center my-10 text-lg font-semibold">
          <div className="items-center text-center">
            <img
              className="w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44"
              src="https://res.cloudinary.com/deprog/image/upload/c_scale,q_66,w_400/v1633629367/AdamLuba_strg7d.jpg"
              alt="photo of Adam Luba and Tima"
            />
            <span>{t('A&L')}</span>
          </div>
          <div className="items-center text-center">
            <img
              className="w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44"
              src="https://res.cloudinary.com/deprog/image/upload/c_scale,w_400/v1633629883/Vika_srthqf.jpg"
              alt="photo of Vika"
            />
            <span>{t('Vika')}</span>
          </div>
          <div className="items-center text-center">
            <img
              className="w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44"
              src="https://res.cloudinary.com/deprog/image/upload/v1633629359/Roma_bsaue8.jpg"
              alt="photo of Roma"
            />
            <span>{t('Roma')}</span>
          </div>
        </div>
      </section>

      <section className="max-w-3xl p-5 mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">{t('WHAT_WE_BELIEVE')}</h1>
        </div>
        <h3 className="my-4 text-3xl font-semibold">{t('SCRIPTURES')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">
          {t('SCRIPTURES_P')}
        </p>
        <h3 className="my-4 text-3xl font-semibold">{t('GOD')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">{t('GOD_P')}</p>
        <h3 className="my-4 text-3xl font-semibold">{t('JC')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">{t('JC_P')}</p>
        <h3 className="my-4 text-3xl font-semibold">{t('HS')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">{t('HS_P')}</p>
        <h3 className="my-4 text-3xl font-semibold">{t('HUMANITY')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">{t('HUMANITY_P')}</p>
        <h3 className="my-4 text-3xl font-semibold">{t('CHURCH')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">{t('CHURCH_P')}</p>
        <h3 className="my-4 text-3xl font-semibold">{t('DISCIPLESHIP')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">
          {t('DISCIPLESHIP_P')}
        </p>
        <h3 className="my-4 text-3xl font-semibold">{t('FUTURE')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">{t('FUTURE_P')}</p>

        <div className="p-4 mx-auto mb-4 bg-blue-100 border-l-8 border-blue-500 rounded lg:w-3/4">
          <p>{t('BLOCKQUOTE')}</p>
          <p className="pl-5">{t('BLOCKQUOTE1')}</p>
          <p className="pl-5">{t('BLOCKQUOTE2')}</p>
        </div>
      </section>
      <section className="max-w-3xl p-5 mx-auto">
        <h2 className="max-w-5xl py-8 mx-auto text-3xl font-semibold text-center lg:text-4xl">
          {t('DISTINCTIVES')}
        </h2>
        <h3 className="my-4 text-2xl font-semibold">{t('D1')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">{t('D1P1')}</p>
        <h3 className="my-4 text-2xl font-semibold">{t('D2')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">{t('D2P1')}</p>
        <h3 className="my-4 text-2xl font-semibold">{t('D3')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">{t('D3P')}</p>
        <h3 className="my-4 text-2xl font-semibold">{t('D4')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">{t('D4P')}</p>
        <h3 className="my-4 text-2xl font-semibold">{t('D5')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">{t('D5P')}</p>
        <h3 className="my-4 text-2xl font-semibold">{t('D6')}</h3>
        <p className="w-full mb-10 text-lg text-gray-700">{t('D6P1')}</p>
        <p className="w-full mb-10 text-lg text-gray-700">{t('D6P2')}</p>

        <h2 className="my-4 text-4xl font-bold">{t('WHO_WE_ARE')}</h2>
        <p className="w-full mb-5 text-lg text-gray-700">
          {t('WHO_WE_ARE_SUB')}
        </p>
        <p className="w-full mb-10 text-lg text-gray-700">
          {t('WHO_WE_ARE_SUB1')}
        </p>
        <div className="p-4 mx-auto bg-blue-100 border-l-8 border-blue-500 rounded lg:w-3/4">
          <p className="pb-3 pl-2">{t('WHO_WE_ARE_SUB2')}</p>
          <p className="pb-3 pl-2">{t('WHO_WE_ARE_SUB3')}</p>
          <p className="pb-3 pl-2">{t('WHO_WE_ARE_SUB4')}</p>
          <p className="pl-2">{t('WHO_WE_ARE_SUB5')}</p>
        </div>
      </section>
    </div>
  );
}

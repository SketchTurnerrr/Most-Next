import { getLocale, getTranslations } from 'next-intl/server';
import { AudioPlayer } from '@/components/AudioPlayer';

export default async function Listen() {
  const res = await fetch(process.env.AUDIO_MANIFEST_URL!, {
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error('Failed to load audio manifest');
  const tracks = (await res.json()) as Array<{
    id: string;
    date: string;
    title_en: string;
    title_uk: string;
    speaker_en: string;
    speaker_uk: string;
    url: string;
    duration: number;
  }>;

  const locale = await getLocale();
  const t = await getTranslations('Listen');
  return (
    <div className="space-y-6 h-full mb-20 ">
      <div className="bg-gradient-to-r from-blue-400 to-pink-300">
        <h1 className="pb-10 font-bold text-center text-white text-7xl pt-54 text-shadow">
          {t('listen')}
        </h1>
      </div>
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-4">
          {tracks.map((t) => (
            <li
              key={t.id}
              className="flex flex-col gap-8  bg-slate-100 p-4 rounded-md"
            >
              <div className="space-y-2">
                <span className="inline-block font-medium text-xl">
                  {locale === 'uk' ? t.title_uk : t.title_en}
                </span>
                {` — ${locale === 'uk' ? t.speaker_uk : t.speaker_en}`}
                <p className="text-slate-500 ">
                  {new Date(t.date).toLocaleString(locale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <AudioPlayer src={t.url} duration={t.duration} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

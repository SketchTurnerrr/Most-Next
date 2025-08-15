import LocaleSwitcher from '@/components/LocaleSwitcher';
import LocaleSwitcherSelect from '@/components/LocaleSwitcherSelect';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('Navbar');

  const locale = useLocale();
  console.log('locale navbar:', locale);

  return (
    <div className="flex font-inter justify-between px-4 items-center md:px-40 lg:px-60 py-6 bg-background text-foreground">
      <Link href="/" className="text-4xl font-bold ">
        {t('BC')}
      </Link>
      <LocaleSwitcher />
      <div className="hidden lg:flex gap-4 font-semibold">
        <Link href="/ministries">{t('ministries')}</Link>
        <Link href="/about">{t('about')}</Link>
        <Link href="/listen">{t('listen')}</Link>
      </div>

      <Popover>
        <PopoverTrigger className="lg:hidden">
          <Menu />
        </PopoverTrigger>
        <PopoverContent className="w-30 mr-4 mt-4">
          <div className=" flex flex-col gap-4 font-semibold">
            <Link href="/ministries">{t('ministries')}</Link>
            <Link href="/about">{t('about')}</Link>
            <Link href="/listen">{t('listen')}</Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

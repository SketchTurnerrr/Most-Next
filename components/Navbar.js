import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('navbar');
  const router = useRouter();

  return (
    <div>
      <nav>
        <div className='px-4 py-3 mx-auto border-b border-blue-100 max-w-7xl sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16 '>
            <div className='flex-shrink-0'>
              <Link href='/'>
                <a className='text-xl font-bold lg:text-3xl'>{t('BC')}</a>
              </Link>
            </div>
            {/* LANGUAGE DIV */}
            <div className='flex items-center'>
              <Link href='/' locale={router.locale === 'ua' ? 'en' : 'en'}>
                <a className='mx-1 text-sm font-semibold lg:text-base hover:text-gray-500 focus:outline-none'>
                  EN
                </a>
              </Link>
              <Link href='/' locale={router.locale === 'en' ? 'ua' : 'ua'}>
                <a className='mx-1 text-sm font-semibold lg:text-base hover:text-gray-500 focus:outline-none'>
                  UA
                </a>
              </Link>
            </div>
            {/* MENU LINKS */}
            <div className='flex items-center'>
              <div className='hidden md:block'>
                <div className='flex items-baseline ml-10 space-x-4'>
                  <Link href='/ministries'>
                    <a className='px-3 py-2 text-sm font-semibold text-black lg:text-base hover:text-gray-500'>
                      {t('ministries')}
                    </a>
                  </Link>
                  <Link href='/about'>
                    <a className='px-3 py-2 text-sm font-semibold text-black lg:text-base hover:text-gray-500'>
                      {t('about')}
                    </a>
                  </Link>
                  <Link href='/listen'>
                    <a className='px-3 py-2 text-sm font-semibold text-gray-800 lg:text-base hover:text-gray-500'>
                      {t('listen')}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* MENU BUTTON */}
            <div className='flex -mr-2 md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='inline-flex items-center justify-center p-2 text-gray-800 rounded-md hover:text-black focus:outline-none'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block w-6 h-6 '
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block w-6 h-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {() => (
            <div className='md:hidden' id='mobile-menu'>
              <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <Link href='/ministries'>
                  <a className='block px-3 py-2 text-base font-semibold text-black rounded-md hover:bg-gray-700 hover:text-white'>
                    {t('ministries')}
                  </a>
                </Link>

                <Link href='/about'>
                  <a className='block px-3 py-2 text-base font-semibold text-black rounded-md hover:bg-gray-700 hover:text-white'>
                    {t('about')}
                  </a>
                </Link>

                <Link href='/listen'>
                  <a className='block px-3 py-2 text-base font-semibold text-black rounded-md hover:bg-gray-700 hover:text-white'>
                    {t('listen')}
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;

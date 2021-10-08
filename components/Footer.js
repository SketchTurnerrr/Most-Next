import Link from 'next/link';

export default function Footer() {
  return (
    <div className='mt-16 text-center bg-gray-900 lg:h-96'>
      <div className='pt-16 text-3xl text-gray-200 fornt-bold'>
        Bridge Church 2021
      </div>
      <div className='justify-center pt-10 lg:flex'>
        <div className='px-10 pb-5 text-xl text-gray-200 fornt-bold'>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
        <div className='px-10 pb-5 text-xl text-gray-200 fornt-bold'>
          <Link href='/ministries'>
            <a>Ministries</a>
          </Link>
        </div>
        <div className='px-10 pb-5 text-xl text-gray-200 fornt-bold'>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </div>
        <div className='px-10 pb-5 text-xl text-gray-200 fornt-bold'>
          <Link href='/listen'>
            <a>Listen</a>
          </Link>
        </div>
      </div>
      <div className='px-3 py-12 text-gray-200 lg:mx-auto lg:w-1/2 lg:text-center text-md '>
        And let us take thought of how to spur one another on to{' '}
        <span className='text-pink-300'>love</span> and{' '}
        <span className='text-pink-300'>good works</span>, not abandoning our
        own <span className='text-pink-300'>meetings</span>, as some are in the
        habit of doing, but encouraging each other, and even more so because you
        see the day drawing near.
      </div>
    </div>
  );
}

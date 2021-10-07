export default function SkeletonTrack({ type = 'short' }) {
  return (
    <div className='max-w-md mx-6 mt-10 overflow-hidden bg-white shadow-md md:mx-auto rounded-xl md:max-w-4xl'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <div className='w-full h-48 bg-gray-300 md:w-48 animate-pulse'></div>
        </div>
        <div className='w-full p-4'>
          <div className='w-full h-5 mt-4 bg-gray-200 rounded animate-pulse'></div>
          <div className='w-48 h-5 mt-2 bg-gray-200 rounded animate-pulse'></div>
          <div className='w-full h-10 bg-gray-200 rounded mt-9 animate-pulse'></div>
        </div>
      </div>
    </div>
  );
}

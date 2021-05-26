import Link from 'next/link';
import Image from 'next/image';

const Blog = props => {
  return (
    <div className='flex-1 px-64'>
      <div className='flex rounded-lg shadow-md px-4 py-2 space-x-8'>
        <div className='flex-none'>
          <Image
            className=''
            src='/tourloop.png'
            alt='TourLoop'
            width={320}
            height={166}
          />
        </div>
        <div className='flex-1 flex flex-col justify-between'>
          <div className='flex-1 space-y-2'>
            <h1 className='text-2xl'>How to Get Out of a Rut</h1>
            <h2 className='text-base text-gray-700'>
              Simple actionable steps you can take to get you back on track
            </h2>
          </div>
          <div className='flex-none flex justify-between'>
            <div className='flex-1 flex space-x-2'>
              <div className='rounded-full py-1 px-4 w-min bg-gray-200 '>
                <p className='text-sm'>Productivity</p>
              </div>
              <div className='rounded-full py-1 px-4 w-min bg-gray-200 '>
                <p className='text-sm'>Health</p>
              </div>
            </div>
            <div className='flex-none'>
              <h2 className='text-base text-gray-700'>May 26, 2021</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

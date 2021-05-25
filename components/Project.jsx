import Image from 'next/image';

const Project = props => {
  return (
    <div className='flex flex-1 py-8 space-x-12'>
      <h1 className='flex-none font-bold text-2xl'>TourLoop</h1>
      <div className='flex-1 flex flex-col space-y-2'>
        <div className='flex-none flex items-center space-x-8'>
          <div className='flex items-center space-x-2'>
            <Image src='/user.svg' alt='Contributors' width={20} height={20} />
            <span className='text-sm'>3</span>
          </div>
          <div className='flex items-center space-x-2'>
            <Image src='/calendar.svg' alt='Date' width={20} height={20} />
            <span className='text-sm'>Jan - Apr 2021</span>
          </div>
          <div className='flex items-center space-x-2'>
            <Image
              src='/github_logo_black.svg'
              alt='Github Link'
              width={20}
              height={20}
            />
            <a className='text-black text-sm' href='' target='_blank'>
              Repo
            </a>
          </div>
        </div>
        <div className='flex-1'>
          <p className='text-gray-700 text-base mt-2 mb-4'>
            TourLoop is a route finding web application that optimizes routes
            for leisurely activities such as walking, biking or longboarding.
          </p>
          <p className='text-gray-700 text-base mt-2 mb-4'>
            Worked on project with Alex Rostron and Kai Bailey.
          </p>
          <div className='flex items-center'>
            <a className='text-blue-500 mr-1' href='' target='_blank'>
              Link to application
            </a>
            <Image
              src='/external_link.svg'
              alt='Contributors'
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className='flex-none'>
        <Image
          className=''
          src='/tourloop.png'
          alt='TourLoop'
          width={320}
          height={166}
        />
      </div>
    </div>
  );
};

export default Project;

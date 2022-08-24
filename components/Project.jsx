import Image from 'next/image';

const Project = props => {
  const {
    title,
    contributors,
    timeline,
    githubLink,
    appLink,
    description,
    subDescription,
    assetPath,
  } = props;

  return (
    <div className='flex flex-col flex-1 py-8 space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
      <h1 className='flex-none font-bold text-2xl w-56 text-center'>{title}</h1>
      <div className='flex-1 flex flex-col space-y-2'>
        <div className='flex-none flex items-center space-x-8'>
          <div className='flex items-center space-x-2'>
            <Image src='/user.svg' alt='Contributors' width={20} height={20} />
            <span className='text-sm'>{contributors}</span>
          </div>
          <div className='flex items-center space-x-2'>
            <Image src='/calendar.svg' alt='Date' width={20} height={20} />
            <span className='text-sm'>{timeline}</span>
          </div>
          {githubLink && (
            <a href={githubLink} target='_blank'>
              <div className='flex items-center space-x-2'>
                <Image
                  src='/github_logo_black.svg'
                  alt='Github Link'
                  width={20}
                  height={20}
                />
                <span className='text-black text-sm'>Repo</span>
              </div>
            </a>
          )}
        </div>
        <div className='flex-1'>
          <p className='text-gray-700 text-base mt-2 mb-4'>{description}</p>
          <p className='text-gray-700 text-base mt-2 mb-4'>{subDescription}</p>
          {appLink && (
            <a href={appLink} target='_blank'>
              <div className='flex items-center'>
                <span className='text-blue-500 mr-1'>Link to application</span>
                <Image
                  src='/external_link.svg'
                  alt='Contributors'
                  width={20}
                  height={20}
                />
              </div>
            </a>
          )}
        </div>
      </div>
      <div className='flex-none'>
        <Image
          className=''
          src={assetPath}
          alt={title}
          width={320}
          height={180}
        />
      </div>
    </div>
  );
};

export default Project;

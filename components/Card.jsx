import Link from 'next/link';
import Image from 'next/image';

const Card = (props) => {
  const { imagePath, imageAlt, contributors, link, title, text, readMoreLink } =
    props;

  return (
    <div className='relative flex flex-col w-80 rounded-md shadow-lg bg-white'>
      <div className='flex-none'>
        <Image
          className='rounded-t-lg'
          src={imagePath}
          alt={imageAlt}
          width={320}
          height={180}
        />
      </div>
      <div className='px-6 py-4 flex flex-auto flex-col justify-between'>
        <div className='flex-auto'>
          <h1 className='font-bold text-xl mb-2'>{title}</h1>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Image
                src='/user.svg'
                alt='Contributors'
                width={16}
                height={16}
              />
              <span className='ml-1'>{contributors}</span>
            </div>
            <div className='flex items-center'>
              <a className='text-blue-500 mr-1' href={link} target='_blank'>
                Link
              </a>
              <Image
                src='/external_link.svg'
                alt='Contributors'
                width={16}
                height={16}
              />
            </div>
          </div>
          <p className='text-gray-700 text-base mt-2 mb-4'>{text}</p>
        </div>
        <Link className='flex-none' href={readMoreLink}>
          <a className='text-blue-500'>Read more</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;

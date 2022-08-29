import Image from 'next/image';

const SocialLogo = (props) => {
  const { src, alt, width, height, username, link } = props;

  return (
    <a href={link} target='_blank'>
      <div className='flex'>
        <Image src={src} alt={alt} width={width} height={height} />
        <span className='text-sm text-white ml-2'>{username}</span>
      </div>
    </a>
  );
};

export default SocialLogo;

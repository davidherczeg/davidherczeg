import Image from 'next/image';

const Hero = props => {
  return (
    <div
      className='flex flex-col justify-center w-full p-32 bg-hero'
      style={{ height: 500, marginTop: -68 }}
    >
      <h1 className='text-white text-6xl my-2'>
        Hello! I'm <span className='text-purple-500'>David</span>
      </h1>
      <h1 className='text-white text-6xl my-2'>
        A <span className='text-purple-500'>Software Developer</span>
      </h1>
    </div>
  );
};

export default Hero;

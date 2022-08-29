import Image from 'next/image';

const Hero = (props) => {
  return (
    <div
      className='flex flex-col justify-center w-full px-24 md:px-32 lg:px-16 xl:px-32 bg-hero bg-center space-y-2'
      style={{ height: 500, marginTop: -68 }}
    >
      <h1 className='text-white text-4xl lg:text-6xl'>
        Hello! I'm <span className='text-purple-500'>David</span>
      </h1>
      <h1 className='text-white text-4xl lg:text-6xl'>
        A <span className='text-purple-500'>Full Stack Developer</span>
      </h1>
    </div>
  );
};

export default Hero;

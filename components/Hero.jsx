const Hero = props => {
  return (
    <div
      className='flex flex-col justify-end w-full bg-black p-32'
      style={{ height: 500 }}
    >
      <h1 className='text-white text-6xl my-2'>
        Hello! I'm <span className='text-blue-500'>David</span>
      </h1>
      <h1 className='text-white text-6xl my-2'>
        A <span className='text-blue-500'>Full-Stack Developer</span>
      </h1>
    </div>
  );
};

export default Hero;

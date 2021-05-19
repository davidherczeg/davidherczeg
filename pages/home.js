import Navbar from '../components/Navbar';

export default () => {
  return (
    <div className='w-full h-screen bg-blue-100'>
      <Navbar />
      <div className='w-full bg-black' style={{ height: 500 }}>
        <h1 className='text-white'>Full Stack Developer & Designer</h1>
      </div>
      <div className='w-full bg-white' style={{ height: 500 }}></div>
    </div>
  );
};

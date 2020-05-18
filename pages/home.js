import Navbar from '../components/Navbar';

export default () => {
  return (
    <div className='w-full h-screen bg-blue-100'>
      <Navbar />
      <div className='w-full bg-gray-200' style={{ height: 500 }}>
        <h1>Full Stack Developer & Designer</h1>
      </div>
      <div className='w-full bg-white' style={{ height: 500 }}></div>
    </div>
  );
};

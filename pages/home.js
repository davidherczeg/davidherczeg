import Navbar from '../components/Navbar';
import NavDrawer from '../components/NavDrawer';
import Overlay from '../components/Overlay';

export default () => {
  return (
    <div className='w-full h-screen bg-gray-400'>
      <Navbar />
      <NavDrawer />
      <Overlay />
      <h1>Home</h1>
    </div>
  );
};

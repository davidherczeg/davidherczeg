import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Section from '../components/Section';

export default () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <Hero />
      <Section label='About Me' />
    </div>
  );
};

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Project from '../components/Project';
import Blog from '../components/Blog';

export default () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <Section label='Blog'>
        <div className='flex flex-col space-y-8'>
          <Blog />
          <Blog />
        </div>
      </Section>
      <Footer />
    </div>
  );
};

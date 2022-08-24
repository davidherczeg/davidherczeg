import Image from 'next/image';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Project from '../components/Project';
import Blog from '../components/Blog';

export default () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar />
      <Section label='Blog'>
        <p className='text-2xl text-center'>Blogs coming soon!</p>
        {/* <div className='flex'>
          <div className='flex-1' />
          <div className='flex-none flex flex-col space-y-8 divide-y'>
            <Blog />
            <Blog />
          </div>
          <div className='flex-1' />
        </div> */}
      </Section>
      <Footer />
    </div>
  );
};

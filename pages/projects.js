import Image from 'next/image';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Project from '../components/Project';

export default () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <Section label='Projects'>
        <div className='flex'>
          <div className='flex flex-col flex-1 divide-y'>
            <Project />
            <Project />
          </div>
          <div className='flex-none w-64 bg-black mx-8'></div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

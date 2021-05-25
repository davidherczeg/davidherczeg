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
          <div className='flex-none w-64 mx-8 pl-16 py-8'>
            <ul className='list-inside space-y-4 border-l-2 border-pink-500 pl-4'>
              <li className='text-base'>TourLoop</li>
              <li className='text-base'>TourLoop</li>
              <li className='text-base'>TourLoop</li>
              <li className='text-base'>TourLoop</li>
            </ul>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

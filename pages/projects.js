import Image from 'next/image';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Project from '../components/Project';

export default () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar />
      <Section label='Projects'>
        <div className='flex space-x-12'>
          <div className='flex flex-col flex-1 divide-y'>
            <Project />
            <Project />
          </div>
          <div className='hidden flex-none w-40 py-8 xl:block'>
            <ul className='list-inside space-y-4 border-l-2 border-purple-500 pl-4'>
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

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { texts } from '../data/texts';

export default () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar />
      <Section label='About Me'>
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8'>
          <div className='flex flex-col justify-center space-y-4'>
            {texts.homeMain.map((text, index) => (
              <p key={index} className='text-lg'>
                {text}
              </p>
            ))}
            {texts.aboutMain.map((text, index) => (
              <p key={index} className='text-lg'>
                {text}
              </p>
            ))}
          </div>
          <div className='flex-none flex justify-center lg:flex-col lg:justify-start'>
            <Image
              className='rounded-full'
              src='/david_herczeg.jpg'
              alt='David Herczeg'
              width={300}
              height={300}
            />
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

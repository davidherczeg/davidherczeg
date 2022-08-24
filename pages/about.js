import Image from 'next/image';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar />
      <Section label='About Me'>
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8'>
          <div className='space-y-4'>
            <p className='text-lg'>
              I'm a full-stack developer with 2 years of professional experience
              developing web applications for production ready systems. Nulla
              porta leo quis iaculis rhoncus. Nunc quis feugiat tortor. Morbi
              tincidunt ligula nisi, eget eleifend nisi commodo ac. Integer
              commodo vehicula lectus, eu facilisis lectus vulputate id. Donec
              euismod orci enim, vitae accumsan arcu commodo sed. Donec
              porttitor tortor lacus, eu euismod dui luctus et. Cras luctus,
              magna in semper blandit, massa quam commodo dui, at suscipit eros
              elit ut dolor. In blandit vestibulum libero, quis laoreet mauris
              viverra id. Duis condimentum mollis enim, sit amet finibus quam
              sodales vitae. Quisque quis suscipit metus, in ultrices felis.
            </p>
            <p className='text-lg'>
              Nulla hendrerit enim eget sem bibendum maximus. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Duis eu consequat massa. Aenean pellentesque dolor
              sit amet blandit ullamcorper. Integer tristique, eros quis blandit
              mattis, arcu metus placerat elit, eu efficitur leo turpis ac nibh.
              Maecenas placerat tellus eu ex mollis commodo. Etiam rutrum velit
              ac mi tincidunt posuere.
            </p>
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

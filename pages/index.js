import Image from 'next/image';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { texts } from '../data/texts';

export default () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <Hero />
      <Section label=''>
        <div className='flex flex-col lg:flex-row space-y-12 lg:space-x-24 lg:space-y-0'>
          <div className='flex-none flex justify-center lg:block lg:justify-start'>
            <Image
              className='rounded-full'
              src='/david_herczeg.jpg'
              alt='David Herczeg'
              width={300}
              height={300}
            />
          </div>
          <div className='flex flex-col justify-center space-y-4'>
            {texts.homeMain.map((text, index) => (
              <p key={index} className='text-lg'>
                {text}
              </p>
            ))}
          </div>
        </div>
      </Section>
      <Section label=''>
        <div className='flex flex-col items-center lg:items-stretch space-y-12 lg:space-x-4 lg:space-y-0 lg:flex-row lg:justify-around'>
          <Card
            imagePath='/tourloop.PNG'
            imageAlt='TourLoop'
            contributors='3'
            link='http://[2605:fd00:4:1001:f816:3eff:fe49:c687]:5000/'
            title='TourLoop'
            text='TourLoop is a route finding web application that optimizes routes for
            leisurely activities such as walking, biking or longboarding.'
            readMoreLink='/projects#tourloop'
          />
          <Card
            imagePath='/vibes_2.PNG'
            imageAlt='Vibes'
            contributors='6'
            link='https://github.com/CMPUT301F19T09/vibes'
            title='Vibes'
            text='Vibes is an Android app that lets users post, share, and track moods.'
            readMoreLink='/projects#vibes'
          />
          <Card
            imagePath='/igem_ualberta_2018.PNG'
            imageAlt='iGEM UAlberta 2018'
            contributors='1+'
            link='https://2018.igem.org/Team:UAlberta'
            title='iGEM UAlberta 2018'
            text='Attributed for designing and developing the wiki for the UAlberta iGEM team in 2018.'
            readMoreLink='/projects#igem-ualberta-2017'
          />
        </div>
      </Section>
      <Footer />
    </div>
  );
};

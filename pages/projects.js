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
            <Project
              title='TourLoop'
              contributors='3'
              timeline='Jan - Apr 2021'
              appLink='http://162.246.157.222:5000/'
              description='TourLoop is a route finding web application that optimizes routes
            for leisurely activities such as walking, biking or longboarding.'
              subDescription='Python, React, Neo4j'
              assetPath='/tourloop.PNG'
            />
            <Project
              title='iGEM 2019 Wiki'
              contributors='3'
              timeline='Jan - Apr 2021'
              appLink='http://162.246.157.222:5000/'
              description='TourLoop is a route finding web application that optimizes routes
            for leisurely activities such as walking, biking or longboarding.'
              subDescription='Python, React, Neo4j'
              assetPath='/igem_ualberta_2019.PNG'
            />
            <Project
              title='Vibes'
              contributors='6'
              timeline='Oct - Dec 2019'
              githubLink='https://github.com/CMPUT301F19T09/vibes'
              description='Vibes is...'
              subDescription='Worked on project with ...'
              assetPath='/vibes.PNG'
            />
            <Project
              title='iGEM 2018 Wiki'
              contributors='3'
              timeline='Jan - Apr 2021'
              appLink='http://162.246.157.222:5000/'
              description='TourLoop is a route finding web application that optimizes routes
            for leisurely activities such as walking, biking or longboarding.'
              subDescription='Python, React, Neo4j'
              assetPath='/igem_ualberta_2018.PNG'
            />
            <Project
              title='iGEM 2017 Wiki'
              contributors='3'
              timeline='Jan - Apr 2021'
              appLink='http://162.246.157.222:5000/'
              description='TourLoop is a route finding web application that optimizes routes
            for leisurely activities such as walking, biking or longboarding.'
              subDescription='Python, React, Neo4j'
              assetPath='/igem_ualberta_2017.PNG'
            />
          </div>
          {/* <div className='hidden flex-none w-40 py-8 xl:block'>
            <ul className='list-inside space-y-4 border-l-2 border-purple-500 pl-4'>
              <li className='text-base'>TourLoop</li>
              <li className='text-base'>TourLoop</li>
              <li className='text-base'>TourLoop</li>
              <li className='text-base'>TourLoop</li>
            </ul>
          </div> */}
        </div>
      </Section>
      <Footer />
    </div>
  );
};

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Project from '../components/Project';
import { texts } from '../data/texts';

export default () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar />
      <Section label='Projects'>
        <div className='flex space-x-12'>
          <div className='flex flex-col flex-1 divide-y'>
            <Project
              id='tourloop'
              title='TourLoop'
              contributors='3'
              timeline='Jan. - Apr. 2021'
              appLink='http://[2605:fd00:4:1001:f816:3eff:fe49:c687]:5000/'
              githubLink='https://github.com/TourLoop/TourLoop'
              description={texts.projects.tourloop}
              subDescription='Technology used: Python, React, Neo4j, Docker, Cybera Rapid Access Cloud'
              assetPath='/tourloop.PNG'
            />
            <Project
              id='vibes'
              title='Vibes'
              contributors='6'
              timeline='Oct. - Dec. 2019'
              githubLink='https://github.com/CMPUT301F19T09/vibes'
              description={texts.projects.vibes}
              subDescription='Technology used: Java, Firebase, Cloud Firestore'
              assetPath='/vibes_2.PNG'
            />
            <Project
              id='igem-ualberta-2019'
              title='iGEM 2019 Wiki'
              contributors='1+'
              timeline='Oct. 2019'
              appLink='https://2019.igem.org/Team:UAlberta'
              description={texts.projects.igemUalberta2019}
              subDescription='Technology used: HTML, CSS, JQuery, MediaWiki'
              assetPath='/igem_ualberta_2019.PNG'
            />
            <Project
              id='igem-ualberta-2018'
              title='iGEM 2018 Wiki'
              contributors='1+'
              timeline='Oct. 2018'
              appLink='https://2018.igem.org/Team:UAlberta'
              description={texts.projects.igemUalberta2018}
              subDescription='Technology used: HTML, CSS, JQuery, MediaWiki'
              assetPath='/igem_ualberta_2018.PNG'
            />
            <Project
              id='igem-ualberta-2017'
              title='iGEM 2017 Wiki'
              contributors='1+'
              timeline='Mar. - Nov. 2017'
              appLink='https://2017.igem.org/Team:UAlberta'
              description={texts.projects.igemUalberta2017}
              subDescription='Technology used: HTML, CSS, JQuery, MediaWiki'
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

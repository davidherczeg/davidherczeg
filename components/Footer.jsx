import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/svg/logo.svg';
import { links } from '../data/links';
import SocialLogo from './SocialLogo';

const Footer = props => {
  return (
    <div className='w-full bg-black px-24 md:px-32 lg:px-16 pt-16 space-y-8 pb-8 flex flex-col lg:flex-row lg:divide-x lg:divide-white lg:space-y-0 lg:justify-between xl:px-32'>
      <div className='flex-none flex px-8 lg:px-4 xl:px-8'>
        <Link href='/home'>
          <a className=''>
            <Logo className='w-40 h-auto' />
          </a>
        </Link>
      </div>
      <div className='flex-auto flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8 lg:space-x-0 lg:justify-between'>
        <nav className='flex-initial flex'>
          <ul className='px-8 flex-1 flex flex-col space-y-2 lg:px-4 xl:px-8'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>
                  <a className='text-white'>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex-intial flex flex-col px-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:items-center'>
          <div className='flex flex-col space-y-4'>
            <SocialLogo
              src='/github_logo.svg'
              alt='Github'
              width={20}
              height={20}
              username='davidherczeg'
            />
            <SocialLogo
              src='/linkedin_logo.svg'
              alt='LinkedIn'
              width={20}
              height={20}
              username='David Herczeg'
            />
          </div>
          <div className='flex flex-col space-y-4'>
            <SocialLogo
              src='/twitter_logo.svg'
              alt='Twitter'
              width={20}
              height={20}
              username='davidherczeg_'
            />
            <SocialLogo
              src='/instagram_logo.svg'
              alt='Instagram'
              width={20}
              height={20}
              username='davidherczeg_'
            />
          </div>
        </div>
      </div>
      <div className='flex-none flex justify-center px-8 sm:justify-start lg:px-4 lg:justify-between lg:items-center'>
        <p className='text-white text-sm'>
          I can be reached at{' '}
          <span className='text-purple-500'>david.herczeg@live.ca</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

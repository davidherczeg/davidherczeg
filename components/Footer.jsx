import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/svg/logo.svg';
import { links } from '../data/links';

const Footer = props => {
  return (
    <div className='w-full bg-black px-32 pt-16 pb-8 flex divide-x divide-white'>
      <div className='flex-none px-8'>
        <Link href='/home'>
          <a className=''>
            <Logo className='w-40 h-auto' />
          </a>
        </Link>
      </div>
      <div className='flex-auto flex'>
        <nav className='flex-initial flex'>
          <ul className='px-8 flex-1 flex flex-col justify-between items-start'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>
                  <a className='text-white'>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex-1 flex justify-center items-center space-x-8'>
          <div className='flex flex-col space-y-4'>
            <div className='flex'>
              <Image
                src='/github_logo.svg'
                alt='Github'
                width={20}
                height={20}
              />
              <span className='text-white ml-2'>davidherczeg</span>
            </div>
            <div className='flex'>
              <Image
                src='/facebook_logo.svg'
                alt='Facebook'
                width={20}
                height={20}
              />
              <span className='text-white ml-2'>David Herczeg</span>
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='flex'>
              <Image
                src='/twitter_logo.svg'
                alt='Twitter'
                width={20}
                height={20}
              />
              <span className='text-white ml-2'>davidherczeg_</span>
            </div>
            <div className='flex'>
              <Image
                src='/instagram_logo.svg'
                alt='Instagram'
                width={20}
                height={20}
              />
              <span className='text-white ml-2'>davidherczeg_</span>
            </div>
          </div>
        </div>
        <div className='flex-initial flex items-center justify-center px-8'>
          <p className='text-white'>
            I can be reached at{' '}
            <span className='text-purple-500'>david.herczeg@live.ca</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

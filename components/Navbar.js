import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/svg/logo.svg';
import useDrawer from '../hooks/useDrawer';
import dynamic from 'next/dynamic';
import { links } from '../data/links';

const NavDrawer = dynamic(() => import('./NavDrawer'), { ssr: false });

export default props => {
  const { isShowing, toggle } = useDrawer();

  return (
    <header className='flex justify-between items-center px-12 md:px-32 lg:px-16 xl:px-32 py-4 bg-black'>
      <div>
        <Link href='/home'>
          <a className=''>
            <Logo className='w-40 h-auto' />
          </a>
        </Link>
      </div>
      <div className='sm:hidden'>
        <button className='nav-btn' onClick={toggle}>
          <Image src='/menu.svg' alt='menu' width={20} height={20} />
        </button>
        <NavDrawer isShowing={isShowing} toggle={toggle} />
      </div>
      <nav className='hidden sm:block'>
        <ul className='flex items-center space-x-8'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a className='text-white'>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

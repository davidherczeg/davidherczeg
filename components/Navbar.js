import Link from 'next/link';
import Logo from '../assets/svg/logo.svg';
import Menu from '../assets/svg/menu.svg';
import useDrawer from '../hooks/useDrawer';
import dynamic from 'next/dynamic';

const links = [
  { href: '/home', label: 'About' },
  { href: '/home', label: 'Blog' },
  { href: '/home', label: 'Projects' },
  { href: '/home', label: 'Contact' },
];

const NavDrawer = dynamic(() => import('./NavDrawer'), { ssr: false });

export default () => {
  const { isShowing, toggle } = useDrawer();

  return (
    <header className='flex justify-between items-center px-16 md:px-32 py-4 bg-black'>
      <div>
        <Link href='/home'>
          <a className=''>
            <Logo className='w-40 h-auto' />
          </a>
        </Link>
      </div>
      <div className='sm:hidden'>
        <button className='nav-btn' onClick={toggle}>
          <Menu className='w-auto' />
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

import Link from 'next/link';
import Logo from '../assets/logo.svg';
import Menu from '../assets/menu.svg';

const links = [
  { href: '/home', label: 'About' },
  { href: '/home', label: 'Blog' },
  { href: '/home', label: 'Portfolio' },
  { href: '/home', label: 'Contact' },
];

export default () => {
  return (
    <header className='flex justify-between items-center px-16 md:px-32 py-4 bg-gray-500'>
      <div>
        <Link href='/home'>
          <a className=''>
            <Logo className='w-16' />
          </a>
        </Link>
      </div>
      <div className='sm:hidden'>
        <button className='nav-btn'>
          <Menu className='w-auto' />
        </button>
      </div>
      <nav className='hidden sm:block'>
        <ul className='flex items-center space-x-8'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a className=''>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

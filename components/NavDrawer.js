import Link from 'next/link';
import Close from '../assets/close.svg';

const links = [
  { href: '/home', label: 'About' },
  { href: '/home', label: 'Blog' },
  { href: '/home', label: 'Portfolio' },
  { href: '/home', label: 'Contact' },
];

export default () => {
  return (
    <div className='fixed w-64 h-full bg-gray-200 right-0 top-0 z-50 shadow-2xl'>
      <div className='flex px-8 py-4 justify-end'>
        <button className='nav-btn'>
          <Close className='w-4' />
        </button>
      </div>
      <nav className='p-4'>
        <ul className='flex flex-col items-center space-y-4'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a className=''>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

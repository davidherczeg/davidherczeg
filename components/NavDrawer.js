import Image from 'next/image';
import Link from 'next/link';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { links } from '../data/links';

export default props => {
  const { isShowing, toggle } = props;

  return ReactDOM.createPortal(
    <>
      {isShowing && (
        <div
          className='fixed inset-0 bg-black opacity-25 z-40'
          onClick={toggle}
        />
      )}
      <CSSTransition
        in={isShowing}
        classNames='nav-drawer'
        timeout={300}
        unmountOnExit
      >
        <div className='fixed w-64 h-full bg-black right-0 top-0 z-50 shadow-2xl'>
          <div className='flex px-8 py-4 justify-end'>
            <button className='nav-btn' onClick={toggle}>
              <Image src='/close.svg' alt='Close' width={20} height={20} />
            </button>
          </div>
          <nav className='p-4'>
            <ul className='flex flex-col items-center space-y-4'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <Link href={href}>
                    <a className='text-white'>{label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </CSSTransition>
    </>,
    document.body
  );
};

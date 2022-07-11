import logo from '../assets/img/logo-dark.svg';

export const Header = () => {
  return (
    <div className='container header'>
      <a className='header-logo' href='/'>
        <img
          className='header-logo-img'
          src={logo}
          alt='Site logo'
          width={160}
          height={41}
        />
      </a>

      <ul className='header-list'>
        <li className='header-item'>
          <a className='header-links header-link-active' href='/'>
            Home
          </a>
        </li>

        <li className='header-item'>
          <a className='header-links' href='/'>
            Find a doctor
          </a>
        </li>

        <li className='header-item'>
          <a className='header-links' href='/'>
            Apps
          </a>
        </li>

        <li className='header-item'>
          <a className='header-links' href='/'>
            Testimonials
          </a>
        </li>

        <li className='header-item'>
          <a className='header-links' href='/'>
            About us
          </a>
        </li>
      </ul>
    </div>
  );
};

import logo from '../assets/img/intro.png';

export const Intro = () => {
  return (
    <div className='container intro'>
      <div className='intro-content'>
        <h1 className='intro-title'>Virtual healthcare for you</h1>
        <p className='intro-text'>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>

        <a className='intro-link' href='/'>
          Consult today
        </a>
      </div>

      <img
        className='intro-img'
        src={logo}
        alt='intro img'
        width={693}
        height={598}
      />
    </div>
  );
};

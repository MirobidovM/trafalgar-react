import leading from '../assets/img/leading.png';

export const Leading = () => {
  return (
    <div className='container leading'>
      <img
        className='leading-img'
        src={leading}
        alt='leading images'
        width={650}
        height={477}
      />

      <div className='leading-content'>
        <h3 className='leading-title'>Leading healthcare providers</h3>
        <hr className='leading-line' />
        <p className='leading-text'>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>

        <a className='learn-more-link' href='/'>
          Learn more
        </a>
      </div>
    </div>
  );
};

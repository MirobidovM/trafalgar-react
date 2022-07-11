import what from '../assets/img/what.jpg';

export const What = () => {
  return (
    <div className='container what'>
      <h3 className='what-title'>What our customer are saying</h3>
      <hr className='what-line' />

      <div className='what-content'>
        <img
          className='what-img'
          src={what}
          alt='person'
          width={141}
          height={141}
        />

        <h4 className='what-text'>
          Edward Newgate <br />
          <span className='what-text-d'>Founder Circle</span>
        </h4>
        <p className='what-description'>
          “Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely”
        </p>
      </div>
    </div>
  );
};

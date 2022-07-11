import whatArow from '../assets/img/arow.svg';

export const WhatArow = () => {
  return (
    <div className='what-arow'>
      <a className='what-arow-link' href='/'>
        <img
          className='what-arow-img'
          src={whatArow}
          alt='arow'
          width={340}
          height={20}
        />
      </a>
    </div>
  );
};

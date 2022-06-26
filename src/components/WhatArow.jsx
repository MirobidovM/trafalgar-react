import whatArow from '../assets/img/arow.svg';

function WhatArow() {
  return (
    <div class="what-arow">
      <a class="what-arow-link" href="/">
        <img
          class="what-arow-img"
          src={whatArow}
          alt="arow"
          width={340}
          height={20}
        />
      </a>
    </div>
  );
}

export default WhatArow;

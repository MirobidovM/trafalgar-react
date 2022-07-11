import ukol from '../assets/img/ukol.jpg';
import durbin from '../assets/img/durbin.jpg';
import maska from '../assets/img/maska.jpg';

function Check() {
  return (
    <div className='container check'>
      <h2 className='check-title'>Check out our latest article</h2>
      <hr className='check-line' />
      <ul className='check-list'>
        <li className='check-item'>
          <img
            className='check-img'
            src={ukol}
            alt='ukol'
            width={369}
            height={246}
          />
          <div className='check-content'>
            <h3 className='check-text'>
              Disease detection, check <br />
              up in the laboratory
            </h3>
            <p className='check-description'>
              In this case, the role of the health <br />
              laboratory is very important to do <br />a disease detection...
            </p>
            <a className='check-link' href='/'>
              Read more
            </a>
          </div>
        </li>

        <li className='check-item'>
          <img
            className='check-img'
            src={durbin}
            alt='durbin'
            width={369}
            height={246}
          />

          <div className='check-content'>
            <h3 className='check-text'>
              Herbal medicines that are <br />
              safe for consumption
            </h3>
            <p className='check-description'>
              Herbal medicine is very widely used <br />
              at this time because of its very good <br />
              for your health...
            </p>
            <a className='check-link' href='/'>
              Read more
            </a>
          </div>
        </li>

        <li className='check-item'>
          <img
            className='check-img'
            src={maska}
            alt='maska'
            width={369}
            height={246}
          />

          <div className='check-content'>
            <h3 className='check-text'>
              Natural care for healthy <br />
              facial skin
            </h3>
            <p className='check-description'>
              A healthy lifestyle should start from <br />
              now and also for your skin health. <br />
              There are some...
            </p>
            <a className='check-link' href='/'>
              Read more
            </a>
          </div>
        </li>
      </ul>
      <br />

      <a className='check-view-all' href='/'>
        View-all
      </a>
    </div>
  );
}

export { Check };

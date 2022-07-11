import lupa from '../assets/img/lupa.svg';
import asperin from '../assets/img/asperin.svg';
import person from '../assets/img/person.svg';
import info from '../assets/img/info.svg';
import aptechka from '../assets/img/aptechka.svg';
import rezume from '../assets/img/rezume.svg';

export const Services = () => {
  return (
    <div className='container services'>
      <h2 className='services-title'>Our services</h2>
      <hr className='services-line' />
      <p className='services-text'>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>

      <ul className='services-list'>
        <li className='services-item'>
          <img
            className='services-images'
            src={lupa}
            alt='lupa'
            width={92}
            height={90}
          />
          <h3 className='services-subject'>Search doctor</h3>
          <p className='services-description'>
            Choose your doctor from thousands <br />
            of specialist, general, and trusted <br />
            hospitals
          </p>
        </li>

        <li className='services-item'>
          <img
            className='services-images'
            src={asperin}
            alt='asperin'
            width={62}
            height={85}
          />
          <h3 className='services-subject'>Online pharmacy</h3>
          <p className='services-description'>
            Buy your medicines with our <br />
            mobile application with a simple <br />
            delivery system
          </p>
        </li>

        <li className='services-item'>
          <img
            className='services-images'
            src={person}
            alt='person'
            width={67}
            height={95}
          />
          <h3 className='services-subject'>Consultation</h3>
          <p className='services-description'>
            Free consultation with our trusted <br />
            doctors and get the best <br />
            recomendations
          </p>
        </li>

        <li className='services-item'>
          <img
            className='services-images'
            src={info}
            alt='info'
            width={67}
            height={95}
          />
          <h3 className='services-subject'>Details info</h3>
          <p className='services-description'>
            Free consultation with our trusted <br />
            doctors and get the best <br />
            recomendations
          </p>
        </li>

        <li className='services-item'>
          <img
            className='services-images'
            src={aptechka}
            alt='aptechka'
            width={80}
            height={71}
          />
          <h3 className='services-subject'>Emergency care</h3>
          <p className='services-description'>
            You can get 24/7 urgent care for <br />
            yourself or your children and your <br />
            lovely family
          </p>
        </li>

        <li className='services-item'>
          <img
            className='services-images'
            src={rezume}
            alt='rezume'
            width={69}
            height={95}
          />
          <h3 className='services-subject'>Tracking</h3>
          <p className='services-description'>
            Track and save your medical history <br />
            and health data
          </p>
        </li>
      </ul>

      <a className='learn-more-link services-link' href='/'>
        Learn more
      </a>
    </div>
  );
};

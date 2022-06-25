import logo from '../assets/img/logo-white.svg';

function Footer() {
  return (
    <div className="container-footer">
      <div className="footer">
        <div className="footer-content">
          <a className="footer-logo-link" href="index.html">
            <img
              className="footer-logo-img"
              src={logo}
              alt="logo site"
              width={160}
              height={41}
            />
          </a>
          <p className="footer-text">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className="footer-desc">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>
        <ul className="footer-list">
          <li className="footer-item">Company</li>
          <li className="footer-item-child">About</li>
          <li className="footer-item-child">Testimonials</li>
          <li className="footer-item-child">Find a doctor</li>
          <li className="footer-item-child">Apps</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-item">Region</li>
          <li className="footer-item-child">Indonesia</li>
          <li className="footer-item-child">Singapore</li>
          <li className="footer-item-child">Hongkong</li>
          <li className="footer-item-child">Canada</li>
        </ul>
        <ul className="footer-list">
          <li className="footer-item">Help</li>
          <li className="footer-item-child">Help center</li>
          <li className="footer-item-child">Contact support</li>
          <li className="footer-item-child">Instructions</li>
          <li className="footer-item-child">How it works</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

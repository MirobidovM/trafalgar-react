import download from '../assets/img/download.png';

function Download() {
  return (
    <div className='container download'>
      <div className='download-content'>
        <h3 className='download-title'>Download our mobile apps</h3>

        <hr className='download-line' />

        <p className='download-text'>
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>

        <a className='download-link' href='/'>
          Download
        </a>
      </div>

      <img
        className='download-img'
        src={download}
        alt='download img'
        width={665}
        height={434}
      />
    </div>
  );
}

export default Download;

import Instagram from '../../../assets/Apps/Instagram.svg';
import Facebook from '../../../assets/Apps/Facebook.svg';
import Twitter from '../../../assets/Apps/Twitter.svg';
import GitHub from '../../../assets/Apps/GitHub.svg';

function Apps() {
  return (
    <>
      {[Twitter, Facebook, Instagram, GitHub].map((app, i) => (
        <button
          key={ app.toString() }
          className={ `size-6 flex items-center justify-center
           rounded-full ${i === 1 ? 'bg-black' : 'bg-white'}` }
        >
          <img src={ app } alt={ app.toString() } />
        </button>
      ))}
    </>
  );
}

export default Apps;

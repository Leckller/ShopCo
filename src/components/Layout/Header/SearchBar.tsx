import { Link } from 'react-router-dom';
import Lupa from '../../../assets/Header/lupa.svg';
import Cart from '../../../assets/Header/cart.svg';
import Profile from '../../../assets/Header/profile.svg';

function SearchBar() {
  return (
    <section
      className="flex flex-row justify-end items-center flex-grow
       md:justify-center max-w-[600px] "
    >

      <label
        className="flex flex-row justify-center rounded-2xl
        md:border md:w-full"
      >
        <img src={ Lupa } alt="lupa" />
        <input
          type="text"
          placeholder="Search for products..."
          className="rounded-2xl focus:visible w-0 invisible
          md:w-full md:visible"
        />
      </label>

      <Link to="/Cart">
        <img src={ Cart } alt="Cart" />
      </Link>
      <Link to="/Profile">
        <img src={ Profile } alt="Profile" />
      </Link>

    </section>
  );
}

export default SearchBar;

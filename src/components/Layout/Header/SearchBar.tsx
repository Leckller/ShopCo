import { Link } from 'react-router-dom';
import Lupa from '../../../assets/Header/lupa.svg';
import Cart from '../../../assets/Header/cart.svg';
import Profile from '../../../assets/Header/profile.svg';

function SearchBar() {
  return (
    <section
      className="flex flex-row justify-end items-center flex-grow
       md:justify-center"
    >

      <label className="flex flex-row justify-center md:border rounded-2xl md:w-full">
        <img src={ Lupa } alt="lupa" />
        <input
          type="text"
          placeholder="Search for products..."
          className="rounded-2xl md:visible focus:visible w-0 md:w-full invisible"
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

import { Link } from 'react-router-dom';

function SearchBar() {
  return (
    <section>
      <label>
        <img src="" alt="lupa" />
        <input type="text" />
      </label>
      <Link to="/Cart">Car</Link>
      <Link to="/Profile">Profile</Link>
    </section>
  );
}

export default SearchBar;

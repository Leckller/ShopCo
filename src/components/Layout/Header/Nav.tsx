import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <select>
        <option value="Shop">Shop</option>
      </select>
      <Link to="/Shop">On Sale</Link>
      <Link to="/NewArrivals">New Arrivals</Link>
      <Link to="/Brands">Brands</Link>
    </nav>
  );
}

export default Nav;

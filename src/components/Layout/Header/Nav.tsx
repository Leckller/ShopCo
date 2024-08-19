import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="invisible w-0 h-0 md:visible md:w-auto md:h-auto">
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

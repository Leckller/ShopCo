import { useParams } from 'react-router-dom';

function Header() {
  const { type } = useParams();
  return (
    <section className="flex flex-row justify-between">
      <h2 className="text-2xl font-semibold">
        {type}
      </h2>
      <article className="flex flex-row gap-2 items-center justify-center">
        {/* alterar isso aq */}
        <p className="text-sm">Showing 1-10 of 100 Products</p>
        <label className="hidden lg:flex text-[#606060]">
          Sorted By:
          <select className="text-black">
            <option value="mostPopular">Most Popular</option>
          </select>
        </label>
      </article>
    </section>
  );
}

export default Header;

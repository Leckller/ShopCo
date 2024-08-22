/* eslint-disable react/jsx-max-depth */
import { useParams } from 'react-router-dom';
import { Roupas } from '../../Utils/Roupas';
import Roupa from '../Home/Roupa';

function Produtos() {
  const { type } = useParams();
  const roupas = [...Roupas.arrivals, ...Roupas.topSeeling,
    ...Roupas.arrivals, ...Roupas.topSeeling];
  return (
    <section className="flex flex-col gap-5">

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
      <section
        className="flex flex-row flex-wrap gap-10
    justify-evenly lg:justify-between"
      >
        {roupas.slice(0, 9).map((roupa) => (
          <Roupa roupa={ roupa } key={ roupa.id } />
        ))}
      </section>
    </section>
  );
}

export default Produtos;

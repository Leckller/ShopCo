/* eslint-disable jsx-a11y/control-has-associated-label */
import GenericSize from './GenericSize';
import option from '../../../assets/Config/Config.svg';

function Reviews() {
  return (
    <GenericSize>
      <section className="flex flex-row justify-between w-full">
        <h2 className="text-xl font-semibold">All Reviews (123)</h2>
        <article>
          <button>
            <img src={ option } alt="Filtro" />
          </button>
          <select className="md:visible hidden">
            <option value="latest">Latest</option>
          </select>
          <button>Write a Review</button>
        </article>
      </section>
    </GenericSize>
  );
}

export default Reviews;

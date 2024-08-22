/* eslint-disable jsx-a11y/control-has-associated-label */
import option from '../../../assets/Config/Config.svg';
import Comentarios from '../../../Utils/Comentarios';
import Comment from '../../Home/Comment';

function Reviews() {
  return (
    <article className="flex w-full flex-col gap-5 items-center">
      <section className="flex flex-row justify-between w-full">
        <h2 className="text-xl font-semibold">All Reviews (123)</h2>
        <article className="flex flex-row gap-2">
          <button>
            <img src={ option } alt="Filtro" />
          </button>
          <select className="md:visible hidden">
            <option value="latest">Latest</option>
          </select>
          <button>Write a Review</button>
        </article>
      </section>
      <section
        className="flex flex-row flex-wrap justify-evenly
      md:justify-between gap-5"
      >
        {Comentarios.map((c, i) => (
          <Comment comment={ c } key={ c.nome + i } />
        ))}
      </section>

      <button
        className="p-3 rounded-3xl border w-[200px]"
      >
        Load More Reviews
      </button>
    </article>
  );
}

export default Reviews;

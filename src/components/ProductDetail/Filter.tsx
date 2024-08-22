import MaiorArrow from '../../assets/Arrows/maiorArrow.svg';
import Config from '../../assets/Config/Config.svg';

function Filter() {
  return (
    <section
      className="min-w-[300px] md:w-[30%] md:max-w-[450px] border rounded-2xl p-5
      flex-col gap-5 hidden md:flex"
    >
      <article
        className="flex flex-row flex-nowrap justify-between"
      >
        <h2>Filters</h2>
        <img src={ Config } alt="Configurações" />
      </article>

      <article className="flex flex-col gap-5 border-t pt-5">
        {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((roupa) => (
          <button
            key={ roupa }
            className="flex flex-row justify-between"
          >
            <h3 className="text-lg ">{roupa}</h3>
            <img src={ MaiorArrow } alt="Maior" />
          </button>
        ))}
      </article>
    </section>

  );
}

export default Filter;

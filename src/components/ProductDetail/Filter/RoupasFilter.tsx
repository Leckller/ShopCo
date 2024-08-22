import MaiorArrow from '../../../assets/Arrows/maiorArrow.svg';

function RoupasFilter() {
  return (
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
  );
}

export default RoupasFilter;

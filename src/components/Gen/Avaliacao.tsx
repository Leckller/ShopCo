import { fullStar, halfStar } from '../../assets/Stars';

function Avaliacao({ avaliacao }: { avaliacao: number }) {
  const stars = [fullStar, fullStar, fullStar, fullStar, fullStar];
  return (
    <article className="flex flex-row font-semibold">
      {stars.slice(0, Math.floor(avaliacao)).map((star, i) => (
        <img
          src={ star }
          alt="star"
          key={ i + avaliacao + new Date().toString() }
        />
      ))}
      {avaliacao.toString().split('.').length === 2 && (
        <img
          src={ halfStar }
          alt="halfStar"
        />
      )}
      <p className="text-black pl-2">
        {avaliacao}
        <span className="text-gray-600">/5</span>
      </p>
    </article>
  );
}

export default Avaliacao;

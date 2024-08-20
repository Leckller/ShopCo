import { useEffect } from 'react';
import IRoupa from '../../Types/IRoupa';
import { fullStar, halfStar } from '../../assets/Stars';

function Roupa({ roupa }: { roupa:IRoupa }) {
  const { avaliacao, desconto, img, nome, preco } = roupa;
  const stars:string[] = [];
  useEffect(() => {
    for (let i = 0; i < avaliacao; i++) {
      if (avaliacao - i === 0.5) {
        stars.push(halfStar);
        return;
      }
      stars.push(fullStar);
    }
  }, []);

  return (
    <article className="snap-center">
      <img src={ img } alt={ nome } />
      <h2>{nome}</h2>
      <p>
        {stars.map((star, i) => (
          <img src={ star } alt="star" key={ i + nome } />
        ))}
        <span className="after:content-[/5]">
          {avaliacao}
        </span>
      </p>
      <p className="before:content-[$]">
        {preco}
        {desconto !== 1 && (
          <span className="before:content-[$] line-through">
            {preco * desconto}
          </span>
        )}
      </p>
    </article>
  );
}

export default Roupa;

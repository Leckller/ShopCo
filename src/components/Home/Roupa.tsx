import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IRoupa from '../../Types/IRoupa';
import { fullStar, halfStar } from '../../assets/Stars';

function Roupa({ roupa }: { roupa:IRoupa }) {
  const navigate = useNavigate();
  const { avaliacao, desconto, img, nome, preco } = roupa;
  const stars = [fullStar, fullStar, fullStar, fullStar, fullStar];
  console.log(avaliacao.toString().split('.'));
  return (
    <button
      className="snap-center flex flex-col gap-2"
      onClick={ () => navigate(`/ProductDetail/${nome}`) }
    >
      <img className="rounded-3xl" src={ img } alt={ nome } />
      <h2 className="text-2xl font-bold">{nome}</h2>
      <section className="flex flex-col gap-5 text-xl font-semibold">
        <article className="flex flex-row">
          {stars.slice(0, Math.floor(avaliacao)).map((star, i) => (
            <img
              src={ star }
              alt="star"
              key={ i + nome }
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

        <article className="flex flex-row gap-5">
          <span className="before:content-['$'] text-black">
            {preco}
          </span>
          {desconto !== 1 && (
            <>
              <span className="text-gray-500 line-through decoration-1">
                {`$${(preco * desconto).toFixed()}`}
              </span>
              <span
                className=" bg-red-100 text-red-500
              pl-3 pr-3 rounded-2xl"
              >
                { `-${100 - desconto * 100}%`}
              </span>
            </>
          )}
        </article>
      </section>
    </button>
  );
}

export default Roupa;

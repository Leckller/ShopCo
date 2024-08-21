import { fullStar, halfStar } from '../../assets/Stars';
import Verificado from '../../assets/Comments/verificado.svg';
import IComentario from '../../Types/IComentario';

function Comment({ comment }: { comment: IComentario }) {
  const stars = [fullStar, fullStar, fullStar, fullStar, fullStar];
  const { avaliacao, nome, verificado, comentario } = comment;

  return (
    <article
      className="flex flex-col
        gap-2 w-full md:w-[400px] snap-center
        border p-2 rounded-xl"
    >
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
      </article>
      <h2 className="flex flex-row flex-nowrap gap-2">
        {nome}
        {verificado && (
          <img src={ Verificado } alt="Verificado" />
        )}
      </h2>
      <p>{comentario}</p>
    </article>
  );
}

export default Comment;

import Comentarios from '../../Utils/Comentarios';
import Comment from './Comment';

function Comments() {
  return (
    <section className="flex flex-col gap-10 justify-center">
      <section className="flex flex-row justify-between">
        <h1>OUR HAPPY CUSTOMERS</h1>

        <article className="flex flex-row gap-10">
          <button>L</button>
          <button>R</button>
        </article>
      </section>

      <section
        className="max-h-[300px] carrossel
      flex flex-wrap flex-col overflow-x-scroll snap-x
      gap-10"
      >
        {Comentarios.map((comentario, index) => (
          <Comment comment={ comentario } key={ comentario.nome + index } />
        ))}
      </section>
    </section>
  );
}

export default Comments;

import { useParams } from 'react-router-dom';
import { Roupas as r } from '../../Utils/Roupas';

function BoardRoupa() {
  const { id } = useParams();
  const roupas = [...r.arrivals, ...r.topSeeling];
  const actualRoupa = roupas.find((e) => e.id === +id!);

  return (
    <article className="flex flex-col-reverse md:flex-row gap-5">
      <article className="flex flex-row md:flex-col gap-5 justify-between">
        <img
          className="w-[30%] md:w-full"
          src={ actualRoupa?.img }
          alt={ actualRoupa?.nome }
        />
        <img
          className="w-[30%] md:w-full"
          src={ actualRoupa?.img }
          alt={ actualRoupa?.nome }
        />
        <img
          className="w-[30%] md:w-full"
          src={ actualRoupa?.img }
          alt={ actualRoupa?.nome }
        />
      </article>
      <img
        className="flex-grow"
        src={ actualRoupa?.img }
        alt={ actualRoupa?.nome }
      />
    </article>
  );
}

export default BoardRoupa;

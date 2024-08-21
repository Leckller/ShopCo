import IRoupa from '../../Types/IRoupa';
import Roupa from './Roupa';

function CarrosselRoupas({ roupas, title }: { roupas: IRoupa[], title: string }) {
  return (
    <section className="w-[100%] items-center flex flex-col gap-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <section
        className="flex flex-col h-[470px] flex-wrap overflow-x-scroll
        snap-x carrossel gap-10"
      >
        {roupas.map((roupa) => (
          <Roupa roupa={ roupa } key={ roupa.nome } />
        ))}
      </section>
    </section>
  );
}

export default CarrosselRoupas;

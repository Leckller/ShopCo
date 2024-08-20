import IRoupa from '../../Types/IRoupa';
import Roupa from './Roupa';

function Arrivals({ roupas, title }: { roupas: IRoupa[], title: string }) {
  return (
    <section className="w-[100%] justify-between flex flex-col">
      <h1>{title}</h1>
      <section
        className="flex flex-col h-[400px] flex-wrap overflow-x-scroll
        snap-x carrossel"
      >
        {roupas.map((roupa) => (
          <Roupa roupa={ roupa } key={ roupa.nome } />
        ))}
      </section>
    </section>
  );
}

export default Arrivals;

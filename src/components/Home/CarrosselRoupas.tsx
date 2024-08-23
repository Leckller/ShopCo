import { useState } from 'react';
import IRoupa from '../../Types/IRoupa';
import Roupa from './Roupa';

function CarrosselRoupas({ roupas, title }: { roupas: IRoupa[], title: string }) {
  const [x, setX] = useState(0);
  return (
    <section className="w-[100%] items-center flex flex-col gap-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <button
        className="flex flex-col h-[425px] flex-wrap overflow-x-scroll
        snap-x carrossel gap-10"
        // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
        onMouseOver={ (e) => setX(e.clientX) }
        onMouseDown={ (e) => {
          // e.target.scroll(x, 0);
        } }
      >
        {roupas.map((roupa) => (
          <Roupa roupa={ roupa } key={ roupa.nome } />
        ))}
      </button>
    </section>
  );
}

export default CarrosselRoupas;

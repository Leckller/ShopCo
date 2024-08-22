import Roupa from '../../Home/Roupa';
import { Roupas as r } from '../../../Utils/Roupas';

function Roupas() {
  const roupas = [...r.arrivals, ...r.topSeeling,
    ...r.arrivals, ...r.topSeeling];

  return (
    <section
      className="flex flex-row flex-wrap gap-10
justify-evenly lg:justify-between"
    >
      {roupas.slice(0, 9).map((roupa) => (
        <Roupa roupa={ roupa } key={ roupa.id } />
      ))}
    </section>
  );
}

export default Roupas;

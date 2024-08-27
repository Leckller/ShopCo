import Roupa from '../../Home/Roupa';
import { useAppSelector } from '../../../hooks/reduxHooks';

function Roupas() {
  const { products: roupas } = useAppSelector((s) => s.Products);

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

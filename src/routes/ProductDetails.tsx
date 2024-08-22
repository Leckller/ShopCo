import { useParams } from 'react-router-dom';
import { Roupas as r } from '../Utils/Roupas';
import BoardRoupa from '../components/ProductDetails/BoardRoupa';
import Avaliacao from '../components/Gen/Avaliacao';
import Preco from '../components/Gen/Preco';

function ProductDetails() {
  const { id } = useParams();
  const roupas = [...r.arrivals, ...r.topSeeling];
  const actualRoupa = roupas.find((e) => e.id === +id!)!;

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div
        className="flex flex-col
     w-[90%] justify-center items-center"
      >
        <section className="flex flex-col md:flex-row">
          <BoardRoupa />
          <section className="md:w-[60%] w-full">
            <h2>
              {actualRoupa.nome}
            </h2>
            <Avaliacao avaliacao={ actualRoupa.avaliacao } />
            <Preco desconto={ actualRoupa.desconto } preco={ actualRoupa.preco } />
          </section>
        </section>
      </div>
    </main>
  );
}

export default ProductDetails;

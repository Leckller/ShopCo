import CarrosselRoupas from '../components/Home/CarrosselRoupas';
import BoardRoupa from '../components/ProductDetails/BoardRoupa';
import Carrossel from '../components/ProductDetails/Carrossel';
import Infos from '../components/ProductDetails/Infos';
import { Roupas } from '../Utils/Roupas';

function ProductDetails() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div
        className="flex flex-col
     w-[90%] justify-center items-center mb-20"
      >
        <section
          className="flex flex-col lg:flex-row gap-5 justify-between
        w-full lg:max-h-[530px] mb-10"
        >
          <BoardRoupa />
          <Infos />
        </section>
        <Carrossel />
        <CarrosselRoupas title="YOU MIGHT ALSO LIKE" roupas={ Roupas.arrivals } />
      </div>
    </main>
  );
}

export default ProductDetails;

import BoardRoupa from '../components/ProductDetails/BoardRoupa';
import Carrossel from '../components/ProductDetails/Carrossel';
import Infos from '../components/ProductDetails/Infos';

function ProductDetails() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <div
        className="flex flex-col
     w-[90%] justify-center items-center"
      >
        <section
          className="flex flex-col md:flex-row gap-5 justify-between
        w-full md:max-h-[530px] mb-10"
        >
          <BoardRoupa />
          <Infos />
        </section>
        <Carrossel />
      </div>
    </main>
  );
}

export default ProductDetails;

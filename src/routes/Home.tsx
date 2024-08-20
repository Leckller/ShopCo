import Carrossel from '../components/Home/CarrosselRoupas';
import MainContent from '../components/Home/MainContent';
import Marcas from '../components/Home/Marcas';
import { Roupas } from '../Utils/Roupas';

function Home() {
  return (
    <main className="w-full bg-[#F2F0F1] flex flex-col justify-center items-center">
      <div
        className="flex flex-col
     w-[90%] justify-center items-center p-1"
      >
        <MainContent />
      </div>
      <Marcas />
      <div className="w-full bg-white flex flex-col justify-center items-center">
        <div
          className="flex flex-col
         w-[90%] justify-center items-center p-1 gap-5"
        >
          <Carrossel title="New Arrivals" roupas={ Roupas.arrivals } />
          <div className="w-full border-t-2" />
          <Carrossel title="Top Selling" roupas={ Roupas.topSeeling } />
        </div>
      </div>

    </main>
  );
}

export default Home;

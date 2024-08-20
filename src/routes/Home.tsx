import MainContent from '../components/Home/MainContent';
import Marcas from '../components/Home/Marcas';

function Home() {
  return (
    <main className="w-full bg-[#F2F0F1] flex justify-center">
      <div
        className="flex flex-col
     w-[90%] justify-between items-center gap-5 p-1"
      >
        <MainContent />
        <Marcas />
      </div>
    </main>
  );
}

export default Home;

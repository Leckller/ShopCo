import { useParams } from 'react-router-dom';
import MaiorArrow from '../assets/Arrows/maiorArrow.svg';
import Filter from '../components/CategoryPage/Filter';
import Produtos from '../components/CategoryPage/Produtos';

function CategoryPage() {
  const { type } = useParams();
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className="border-t w-[90%] pt-5 mb-5">
        <p className="flex flex-row gap-2 mb-5">
          Home
          <img src={ MaiorArrow } alt="Maior" />
          {type}
        </p>

        <section className="flex flex-row w-full md:gap-8">
          <div className="border rounded-2xl h-full">
            <Filter />
          </div>
          <Produtos />
        </section>
      </section>
    </main>
  );
}

export default CategoryPage;

import Colors from './Filter/Colors';
import HeaderFilter from './Filter/HeaderFilter';
import PriceFilter from './Filter/PriceFilter';
import RoupasFilter from './Filter/RoupasFilter';
import Size from './Filter/Size';
import Style from './Filter/Style';

function Filter() {
  return (
    <section
      className="min-w-[300px] md:w-[30%] md:max-w-[450px] p-5
      flex-col gap-5 hidden md:flex "
    >
      <HeaderFilter />
      <RoupasFilter />
      <PriceFilter />
      <Colors />
      <Size />
      <Style />
      <button className="w-full rounded-3xl mt-5 p-3 bg-black text-white">
        Apply Filter
      </button>
    </section>

  );
}

export default Filter;

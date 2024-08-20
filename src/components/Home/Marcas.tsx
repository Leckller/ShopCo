import PRADA from '../../assets/Marcas/PRADA.svg';
import CALVIN from '../../assets/Marcas/CALVIN.svg';
import GUCCI from '../../assets/Marcas/GUCCI.svg';
import VERSACE from '../../assets/Marcas/VERSACE.svg';
import ZARA from '../../assets/Marcas/ZARA.svg';

function Marcas() {
  const marcas = [VERSACE, ZARA, GUCCI, PRADA, CALVIN];
  return (
    <section
      className="flex flex-row flex-wrap justify-between pt-5
      pb-5 gap-5 w-[100%] bg-black"
    >
      {marcas.map((m) => (
        <img
          src={ m }
          alt={ m.toString() }
          key={ m.toString() }
        />
      ))}
    </section>
  );
}

export default Marcas;

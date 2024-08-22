import { useNavigate } from 'react-router-dom';
import IRoupa from '../../Types/IRoupa';
import Avaliacao from '../Gen/Avaliacao';
import Preco from '../Gen/Preco';

function Roupa({ roupa }: { roupa:IRoupa }) {
  const navigate = useNavigate();
  const { avaliacao, desconto, img, nome, preco, id } = roupa;
  return (
    <button
      className="snap-center flex flex-col gap-2 max-w-[400px] min-w-[200px] w-[20%]
      flex-grow justify-between"
      onClick={ () => navigate(`/ProductDetail/${id}`) }
    >

      <img className="rounded-3xl" src={ img } alt={ nome } />
      <h2 className="text-2xl font-bold text-start">{nome}</h2>

      <section className="flex flex-col gap-5 text-xl font-semibold">

        <Avaliacao avaliacao={ avaliacao } />
        <Preco desconto={ desconto } preco={ preco } />

      </section>
    </button>
  );
}

export default Roupa;

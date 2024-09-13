import { useNavigate } from 'react-router-dom';
import Avaliacao from '../Gen/Avaliacao';
import IRoupa from '../../Types/IRoupa';
import Preco from '../Gen/Preco';

function Roupa({ roupa }: { roupa: IRoupa }) {
  const navigate = useNavigate();
  const { avaliacao, desconto, img, nome, preco, id } = roupa;
  return (
    <button
      className="snap-center flex flex-col gap-2 max-w-[400px] min-w-[200px] w-[20%]
      justify-between flex-grow carousel-item"
      onClick={ () => {
        navigate(`/ProductDetail/${id}`);
        // eslint-disable-next-line no-restricted-globals
        scroll(0, 0);
      } }
    >

      <img className="rounded-3xl" src={ img } alt={ nome } />
      <h2 className="text-2xl font-bold text-start">{nome}</h2>
      <Avaliacao avaliacao={ avaliacao } />
      <Preco desconto={ desconto } preco={ preco } />

    </button>
  );
}

export default Roupa;

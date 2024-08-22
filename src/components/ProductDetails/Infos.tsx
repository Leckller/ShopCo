import { useParams } from 'react-router-dom';
import { Roupas as r } from '../../Utils/Roupas';
import Avaliacao from '../Gen/Avaliacao';
import Preco from '../Gen/Preco';
import Add from './Options/Add';
import Size from './Options/Size';
import Colors from './Options/Colors';

function Infos() {
  const { id } = useParams();
  const roupas = [...r.arrivals, ...r.topSeeling];
  const actualRoupa = roupas.find((e) => e.id === +id!)!;

  return (
    <section className="flex-grow flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-start">{actualRoupa.nome}</h2>
      <Avaliacao avaliacao={ actualRoupa.avaliacao } />
      <Preco desconto={ actualRoupa.desconto } preco={ actualRoupa.preco } />
      <p>descriçãp</p>
      <Colors />
      <Size />
      <Add />
    </section>
  );
}

export default Infos;

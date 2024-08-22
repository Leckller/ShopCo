import { useAppDispatch } from '../../hooks/reduxHooks';
import { removeItem } from '../../redux/Reducers/Cart';
import IRoupa from '../../Types/IRoupa';
import Preco from '../Gen/Preco';

function Roupa({ product }: { product: IRoupa }) {
  const dispatch = useAppDispatch();
  return (
    <article className="flex flex-row gap-2">
      <img
        className="h-[150px]"
        src={ product.img }
        alt={ product.nome }
      />
      <article>
        <h3>{product.nome}</h3>
        <p>{`Size: ${product.size}`}</p>
        <p>{`Color: ${product.color}`}</p>
        <Preco desconto={ product.desconto } preco={ product.preco } />
      </article>
      <button onClick={ () => dispatch(removeItem(product)) }>Remover</button>
    </article>
  );
}

export default Roupa;

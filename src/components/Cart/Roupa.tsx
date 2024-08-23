import { useAppDispatch } from '../../hooks/reduxHooks';
import { addToCart, removeItem, removeStakItem } from '../../redux/Reducers/Cart';
import IRoupa from '../../Types/IRoupa';
import Preco from '../Gen/Preco';
import Lixo from '../../assets/Config/Lixo.svg';

function Roupa({ product }: { product: { product: IRoupa, quantity: number } }) {
  const dispatch = useAppDispatch();
  return (
    <article className="flex flex-row gap-2">
      <img
        className="w-[30%]"
        src={ product.product.img }
        alt={ product.product.nome }
      />
      <article className="flex flex-col justify-between">
        <h3 className="text-2xl font-semibold">{product.product.nome}</h3>
        <p>{`Size: ${product.product.size}`}</p>
        <p>{`Color: ${product.product.color}`}</p>
        <Preco desconto={ product.product.desconto } preco={ product.product.preco } />
      </article>

      <article className="flex flex-col justify-between flex-grow items-end pt-1">
        <button onClick={ () => dispatch(removeStakItem(product.product)) }>
          <img src={ Lixo } alt="Remover" />
        </button>
        <article
          className="flex flex-row gap-5 text-xl font-semibold bg-gray-100
          rounded-3xl pl-4 pr-4 pt-1 pb-1"
        >
          <button onClick={ () => dispatch(removeItem(product.product)) }>-</button>
          <p className="text-black">{product.quantity}</p>
          <button onClick={ () => dispatch(addToCart(product)) }>+</button>
        </article>
      </article>
    </article>
  );
}

export default Roupa;

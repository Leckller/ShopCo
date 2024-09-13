import { useState } from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { addToCart } from '../../../redux/Reducers/Cart';
import IRoupa from '../../../Types/IRoupa';
import OptionGeneric from '../../CategoryPage/Filter/OptionGeneric';

function Add({ product }: { product: IRoupa }) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  return (
    <OptionGeneric d>
      <section className="flex flex-row justify-between w-full gap-5 flex-wrap">
        <article
          className="flex flex-row gap-5 bg-gray-200
          justify-around items-center rounded-3xl"
        >
          <button
            className="text-2xl pl-2"
            onClick={ () => setQuantity((prev) => (prev <= 1 ? 1 : prev - 1)) }
          >
            -
          </button>

          <p className="text-black">{quantity}</p>

          <button
            className="text-2xl pr-2"
            onClick={ () => setQuantity((prev) => prev + 1) }
          >
            +
          </button>
        </article>
        <button
          className="bg-black flex-grow text-white p-2 rounded-3xl"
          onClick={ () => dispatch(addToCart({ product, quantity })) }
        >
          Add to cart
        </button>
      </section>
    </OptionGeneric>
  );
}

export default Add;

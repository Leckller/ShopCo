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
      <section className="flex flex-row justify-between w-full">
        <article className="flex flex-row gap-5">
          <button
            onClick={ () => setQuantity((prev) => (prev <= 1 ? 1 : prev - 1)) }
          >
            -
          </button>

          <p>{quantity}</p>

          <button
            onClick={ () => setQuantity((prev) => prev + 1) }
          >
            +
          </button>
        </article>
        <button onClick={ () => dispatch(addToCart({ product, quantity })) }>
          Add to cart
        </button>
      </section>
    </OptionGeneric>
  );
}

export default Add;

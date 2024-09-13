import { useEffect, useState } from 'react';
import OptionGeneric from './OptionGeneric';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { setProducts } from '../../../redux/Reducers/Products';

function Price() {
  const [price, setPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const { products } = useAppSelector((s) => s.Products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(products);
    setMaxPrice(products.reduce((prev, cur) => {
      if ((cur.preco * cur.desconto) > prev) {
        return cur.preco * cur.desconto;
      } return prev;
    }, 0));
    setMinPrice(products.reduce((prev, cur) => {
      if ((cur.preco * cur.desconto) < prev) {
        return cur.preco * cur.desconto;
      } return prev;
    }, 999999));
  }, [products]);

  useEffect(() => {
    console.log(price);
    const filter = products.filter(({ preco, desconto }) => preco * desconto === price);
    dispatch(setProducts(filter));
  }, [price]);

  return (
    <OptionGeneric title="Price">
      <input
        type="range"
        onChange={ ({ target: { value } }) => {
          setPrice(+value);
        } }
        min={ minPrice }
        max={ maxPrice }
      />
    </OptionGeneric>
  );
}

export default Price;

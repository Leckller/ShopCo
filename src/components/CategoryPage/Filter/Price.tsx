import { useEffect, useState } from 'react';
import OptionGeneric from './OptionGeneric';
import { useAppSelector } from '../../../hooks/reduxHooks';

function Price() {
  const [price, setPrice] = useState(0);
  const { products } = useAppSelector((s) => s.Products);
  const maxPrice = products.reduce((prev, cur) => {
    if ((cur.preco * cur.desconto) > prev) {
      return cur.preco * cur.desconto;
    } return prev;
  }, 0);
  const minPrice = products.reduce((prev, cur) => {
    if ((cur.preco * cur.desconto) < prev) {
      return cur.preco * cur.desconto;
    } return prev;
  }, 999999);
  useEffect(() => {
    console.log(price);
    // const filter = products.filter(({preco}) => )
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

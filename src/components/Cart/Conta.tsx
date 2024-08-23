/* eslint-disable jsx-a11y/label-has-associated-control */
import { useAppSelector } from '../../hooks/reduxHooks';
import DiscountImg from '../../assets/Pay/Discount.svg';

function Conta() {
  const { cart } = useAppSelector((s) => s.Cart);
  const precoTotal = cart.reduce((acc, act) => (
    acc + (act.product.preco * act.quantity)), 0);
  const desconto = cart
    .reduce((acc, act) => (acc - (
      act.product.preco * act.product.desconto) * act.quantity), precoTotal);
  const porcentagem = cart.reduce((acc, act) => (
    acc + (100 - (act.product.desconto * 100))), 0);
  return (
    <article
      className="rounded-3xl border p-4
      flex flex-col gap-2 text-lg "
    >
      <h2 className="font-bold text-lg">Order Sumary</h2>

      <article className="flex flex-row justify-between">
        <p className="font-semibold text-black">Subtotal</p>
        <p className="font-semibold text-black">{`$${precoTotal.toFixed()}`}</p>
      </article>

      <article className="flex flex-row justify-between">
        <p className="font-semibold text-black">
          {`Discount (${porcentagem}%)`}
        </p>
        <p className="font-semibold text-red-600">{`-$${desconto.toFixed()}`}</p>
      </article>

      <article className="flex flex-row justify-between">
        <p className="font-semibold text-black">Delivery fee</p>
        <p className="font-semibold text-black">$15</p>
      </article>

      <article className="flex flex-row justify-between">
        <p className="font-semibold text-black">Total</p>
        <p className="font-semibold text-black">
          {`$${(precoTotal - desconto).toFixed()}`}

        </p>
      </article>

      <article className="flex flex-row justify-between gap-2">
        <label className="flex flex-row flex-grow gap-2 p-2 border rounded-3xl">
          <img
            className="w-[20px]"
            src={ DiscountImg }
            alt="Discount"
          />
          <input
            className="w-full outline-none rounded-2xl"
            type="text"
            placeholder="Add promo code"
          />
        </label>
        <button className="bg-black text-white p-2 rounded-3xl w-[100px]">
          Apply
        </button>
      </article>
      <button
        className="bg-black text-white p-2 rounded-3xl w-full"
      >
        Go to Checkout
      </button>
    </article>
  );
}

export default Conta;

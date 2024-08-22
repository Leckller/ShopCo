import Roupa from '../components/Cart/Roupa';
import { useAppSelector } from '../hooks/reduxHooks';

function Cart() {
  const { cart } = useAppSelector((s) => s.Cart);
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className="w-[90%] flex flex-col mb-10">
        <article>
          <h2>YOUR CART</h2>
        </article>

        {cart.length !== 0 ? (
          <section className="flex flex-row gap-5">

            <article className="flex flex-col gap-3 rounded-3xl border p-4">
              {cart.map((c) => (
                <Roupa product={ c } key={ c.id } />
              ))}
            </article>

            <article className="rounded-3xl border p-4 flex-grow">
              conta
            </article>
          </section>
        ) : (
          <h2>
            Your cart is empty
          </h2>
        )}
      </section>
    </main>
  );
}

export default Cart;

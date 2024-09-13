import Conta from '../components/Cart/Conta';
import Roupa from '../components/Cart/Roupa';
import { useAppSelector } from '../hooks/reduxHooks';

function Cart() {
  const { cart } = useAppSelector((s) => s.Cart);
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className="w-[90%] flex flex-col mb-10 gap-5 min-h-52">
        <h2 className="text-4xl font-extrabold">
          YOUR CART
        </h2>

        {cart.length !== 0 ? (
          <section className="flex flex-col md:flex-row gap-5 ">
            <div className="flex-grow">
              <article className="flex flex-col gap-3 flex-grow rounded-3xl border p-4">
                {cart.map((c) => (
                  <Roupa product={ c } key={ c.product.id } />
                ))}
              </article>
            </div>
            <div>
              <Conta />
            </div>
          </section>

        ) : (
          <h2 className="text-2xl font-semibold">
            Your cart is empty
          </h2>
        )}
      </section>
    </main>
  );
}

export default Cart;

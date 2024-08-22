import OptionGeneric from '../../CategoryPage/Filter/OptionGeneric';

function Add() {
  return (
    <OptionGeneric d>
      <section className="flex flex-row justify-between w-full">
        <article className="flex flex-row gap-5">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </article>
        <button>
          Add to cart
        </button>
      </section>
    </OptionGeneric>
  );
}

export default Add;

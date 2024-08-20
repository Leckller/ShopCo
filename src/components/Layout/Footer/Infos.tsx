import InfosCards from './InfosCards';

import Apps from './Apps';

function Infos() {
  return (
    <section className="flex flex-col gap-5 lg:flex-row w-full">
      <article className="flex flex-col gap-2 lg:max-w-[35%]">
        <h2 className="font-extrabold text-xl">
          SHOP.CO
        </h2>
        <p>
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <article className="flex flex-row gap-5">
          <Apps />
        </article>
      </article>
      <InfosCards />
    </section>
  );
}

export default Infos;

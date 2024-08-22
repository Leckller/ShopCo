/* eslint-disable react/jsx-max-depth */
import { Header, Pages, Roupas } from './Produtos/index';

function Produtos() {
  return (
    <section className="flex flex-col gap-5">

      <Header />
      <Roupas />
      <Pages />

    </section>
  );
}

export default Produtos;

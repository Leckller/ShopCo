/* eslint-disable jsx-a11y/control-has-associated-label */
import Menu from '../../../assets/Header/menu.svg';

function Title() {
  return (
    <section className="flex flex-row gap-5 flex-grow-0">
      <button className="visible md:invisible md:absolute">
        <img src={ Menu } alt="Menu-Hamburguer" />
      </button>
      <h1>SHOP.CO</h1>
    </section>
  );
}

export default Title;

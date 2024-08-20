/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate } from 'react-router-dom';
import Menu from '../../../assets/Header/menu.svg';

function Title() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-row gap-5 flex-grow-0">
      <button className="visible md:invisible md:absolute">
        <img src={ Menu } alt="Menu-Hamburguer" />
      </button>
      <button onClick={ () => navigate('/') }>
        <h1 className="text-4xl font-extrabold">SHOP.CO</h1>
      </button>
    </section>
  );
}

export default Title;

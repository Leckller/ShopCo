import MaiorArrow from '../../../assets/Arrows/maiorArrow.svg';
import OptionGeneric from './OptionGeneric';

function Roupas() {
  return (
    <OptionGeneric title="">
      {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((roupa) => (
        <button
          key={ roupa }
          className="flex flex-row justify-between"
        >
          <h3 className="text-lg ">{roupa}</h3>
          <img src={ MaiorArrow } alt="Maior" />
        </button>
      ))}
    </OptionGeneric>
  );
}

export default Roupas;

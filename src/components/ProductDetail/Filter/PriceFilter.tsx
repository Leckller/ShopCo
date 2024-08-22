import OptionGeneric from './OptionGeneric';

function PriceFilter() {
  return (
    <OptionGeneric title="Price">
      <input type="range" />
    </OptionGeneric>
  );
}

export default PriceFilter;

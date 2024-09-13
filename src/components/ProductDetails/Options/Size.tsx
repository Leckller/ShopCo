import { useState } from 'react';
import OptionGeneric from '../../CategoryPage/Filter/OptionGeneric';

function Size() {
  const [option, setOption] = useState<'small' | 'medium' | 'large' | 'x-large'>('small');
  const selected = 'bg-black text-white';
  const notSelected = 'bg-gray-200';
  return (
    <OptionGeneric>
      <h3>Choose Size</h3>
      <article className="flex flex-row gap-2">
        <label className="">
          <h2
            className={ `${option === 'small' ? selected : notSelected}
          p-2 rounded-3xl` }
          >
            Small
          </h2>
          <input
            type="radio"
            className="invisible"
            onClick={ () => setOption('small') }
            value="small"
            name="size"
          />
        </label>
        <label className="">
          <h2
            className={ `${option === 'medium' ? selected : notSelected}
          p-2 rounded-3xl` }
          >
            Medium
          </h2>
          <input
            type="radio"
            className="invisible"
            onClick={ () => setOption('medium') }
            value="medium"
            name="size"
          />
        </label>
        <label className="">
          <h2
            className={ `${option === 'large' ? selected : notSelected}
          p-2 rounded-3xl` }
          >
            Large
          </h2>
          <input
            type="radio"
            className="invisible"
            onClick={ () => setOption('large') }
            value="large"
            name="size"
          />
        </label>
        <label className="">
          <h2
            className={ `${option === 'x-large' ? selected : notSelected}
          p-2 rounded-3xl` }
          >
            X-Large
          </h2>
          <input
            type="radio"
            className="invisible"
            onClick={ () => setOption('x-large') }
            value="x-large"
            name="size"
          />
        </label>
      </article>
    </OptionGeneric>
  );
}

export default Size;

import OptionGeneric from '../../CategoryPage/Filter/OptionGeneric';

function Size() {
  return (
    <OptionGeneric>
      <h3>Choose Size</h3>
      <article className="flex flex-row gap-2">
        <label className="">
          <h2>Small</h2>
          <input type="radio" value="small" name="size" />
        </label>
        <label className="">
          <h2>Medium</h2>
          <input type="radio" value="medium" name="size" />
        </label>
        <label className="">
          <h2>Large</h2>
          <input type="radio" value="large" name="size" />
        </label>
        <label className="">
          <h2>X-Large</h2>
          <input type="radio" value="x-large" name="size" />
        </label>
      </article>
    </OptionGeneric>
  );
}

export default Size;

import Config from '../../../assets/Config/Config.svg';

function HeaderFilter() {
  return (
    <article
      className="flex flex-row flex-nowrap justify-between"
    >
      <h2>Filters</h2>
      <img src={ Config } alt="Configurações" />
    </article>
  );
}

export default HeaderFilter;

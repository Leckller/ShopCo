import { Nav, SearchBar, Title } from './Header/index';

function Header() {
  return (
    <header className="w-full flex justify-center items-center">
      <div className="flex flex-row w-[90%] justify-between items-center gap-5">
        <Title />
        <Nav />
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;

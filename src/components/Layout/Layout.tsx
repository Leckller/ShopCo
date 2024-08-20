import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;

import { Route, Routes } from 'react-router-dom';
import { Home, Layout, Cart, CategoryPage, NotFound, ProductDetails,
  Profile } from './routes';

function App() {
  return (

    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/ProductDetail/:id" element={ <ProductDetails /> } />
        <Route path="/Category/:type" element={ <CategoryPage /> } />
        <Route path="/Cart" element={ <Cart /> } />
        <Route path="/Profile" element={ <Profile /> } />
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

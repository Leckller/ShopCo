import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Layout from './components/Layout/Layout';
import ProductDetails from './routes/ProductDetails';

function App() {
  return (

    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/ProductDetail/:id" element={ <ProductDetails /> } />
        <Route path="/Category/:type" element={ <Home /> } />
        <Route path="/Cart" element={ <Home /> } />
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

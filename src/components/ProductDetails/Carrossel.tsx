import { useState } from 'react';
import Faqs from './CarrosselOptions/Faqs';
import ProductDetails from './CarrosselOptions/ProductDetails';
import Reviews from './CarrosselOptions/Reviews';

function Carrossel() {
  const active = 'border-b border-black';
  const [view, setView] = useState<'rating' | 'details' | 'faqs'>('rating');
  return (
    <section className="flex flex-col w-full gap-5 mb-10 transition-all">
      <article className="flex flex-row justify-evenly border-b">
        <button
          className={ `${view === 'details' ? active : ''}` }
          onClick={ () => setView('details') }
        >
          Product Details
        </button>
        <button
          className={ `${view === 'rating' ? active : ''}` }
          onClick={ () => setView('rating') }
        >
          Rating & Reviews
        </button>
        <button
          className={ `${view === 'faqs' ? active : ''}` }
          onClick={ () => setView('faqs') }
        >
          FAQs
        </button>
      </article>
      {view === 'details' && <ProductDetails />}
      {view === 'rating' && <Reviews />}
      {view === 'faqs' && <Faqs />}
    </section>
  );
}

export default Carrossel;

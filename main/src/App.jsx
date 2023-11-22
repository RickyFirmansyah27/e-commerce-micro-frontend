import React, { useState, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';

const Product = lazy(() => import('product/product'));
const ProductPage = lazy(() => import('product/ProductPage'));
const Orders = lazy(() => import('order/order'));
const Checkout = lazy(() => import('order/Checkout'));
const Delivery = lazy(() => import('delivery/delivery'));

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home loading={loading} setLoading={setLoading} />} />
        <Route path="/products" element={<Suspense fallback={<div>Loading...</div>}><Product /></Suspense>} />
        <Route path="/products/:productId" element={<Suspense fallback={<div>Loading...</div>}><ProductPage /></Suspense>} />
        <Route path="/orders" element={<Suspense fallback={<div>Loading...</div>}><Orders /></Suspense>} />
        <Route path="/orders/checkout" element={<Suspense fallback={<div>Loading...</div>}><Checkout /></Suspense>} />
        <Route path="/delivery" element={<Suspense fallback={<div>Loading...</div>}><Delivery /></Suspense>} />
      </Routes>
    </>
  );
}

export default App;

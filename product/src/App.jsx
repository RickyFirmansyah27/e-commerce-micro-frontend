import React, { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

import "./index.css";
import ProductLists from "./Components/ProductLists";
import ProductPage from "./Components/ProductPage";
//plugin order
const Orders = lazy(() => import("order/order"));
const Checkout = lazy(() => import("order/Checkout"));

const App = () => {
  return (
    <div className="border-4  border-red-700">
      <Routes>
        <Route path="/" element={<ProductLists />} />
        <Route path="/:productId" element={<ProductPage />} />
        <Route
          path="/orders"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Orders />
            </Suspense>
          }
        />
        <Route
          path="/orders/checkout/:productId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Checkout />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

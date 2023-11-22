import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Orders from "./Components/Orders";
import Checkout from "./Components/Checkout";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/checkout"
          element={<Checkout loading={loading} setLoading={setLoading} />}
        />
        <Route
          path="/"
          element={<Orders loading={loading} setLoading={setLoading} />}
        />
      </Routes>
    </>
  );
}

export default App;

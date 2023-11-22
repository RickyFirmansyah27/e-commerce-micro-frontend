import React from "react";
import { Route, Routes } from "react-router-dom";

import "./index.css";
import Delivery from "./Components/Delivery";

const App = () => {
  return (
    <div className="border-4  border-red-700">
      <Routes>
        <Route path="/" element={<Delivery />} />
      </Routes>
    </div>
  );
};

export default App;

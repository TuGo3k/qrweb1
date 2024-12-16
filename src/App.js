import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { FoodDetail } from "./pages/FoodDetail";

function App() {
  const [catchIndex, setCatchIndex] = useState([]);

  const categories = [
    { title: "шарсан тахиа", imgUrl: "/foodimg1.jpg", price: "20'000₮", index: 0 },
    { title: "ШАРСАН ТАХИА 6ХҮН", imgUrl: "/foodimg2.jpg", price: "20'000₮", index: 1 },
    { title: "ШАРСАН ТАХИА + УНДАА", imgUrl: "/foodimg3.jpg", price: "20'000₮", index: 2 },
    { title: "PEPPERONI PIZZA", imgUrl: "/foodimg4.jpg", price: "20'000₮", index: 3 },
    { title: "FRIED CHICKEN (1PC) + DRINK", imgUrl: "/foodimg5.jpg", price: "20'000₮", index: 4 },
    { title: "PEPPERONI PIZZA", imgUrl: "/foodimg6.jpg", price: "20'000₮", index: 5 },
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={<Home categories={categories} setCatchIndex={setCatchIndex} />}
        />
        <Route path="/detail/:id" element={<FoodDetail foods={categories} />} />
      </Routes>
    </Router>
  );
}

export default App;

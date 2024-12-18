import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import ProductCarousel from "../components/ProductCarousel";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <main>
      <ImageCarousel />
      <h2 className="page-heading">Nuestros productos mas reciente</h2>
      <ProductCarousel />
    </main>
  );
};

export default HomePage;

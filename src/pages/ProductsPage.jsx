import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ProductsPage.css";
import FilterSection from "../components/FilterSection";
import ProductsList from "../components/ProductsList";
import axiosInstance from "../utils/axiosConfig";

const ProductsPage = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || null;
  const [filter, setFilter] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = searchResults
          ? { data: { payload: { products: searchResults } } }
          : await axiosInstance.get("/api/products");
        setProducts(response.data.payload.products);
      } catch (err) {
        setError("Error al cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchResults]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <main>
      <div className="products-page">
        <FilterSection onFilterChange={handleFilterChange} />
        <div className="products-section">
          {loading ? (
            <p>Cargando productos...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ProductsList filter={filter} searchResults={products} />
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;

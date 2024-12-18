import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ProductsPage.css";
import FilterSection from "../components/FilterSection";
import ProductsList from "../components/ProductsList";
import axios from "axios";

const ProductsPage = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || null;
  const [filter, setFilter] = useState([]); // Guarda los filtros seleccionados
  const [products, setProducts] = useState([]); // Productos iniciales o de búsqueda
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = searchResults
          ? { data: { payload: { products: searchResults } } }
          : await axios.get("http://localhost:5000/api/products");
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
    setFilter(newFilter); // Actualiza el estado del filtro
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

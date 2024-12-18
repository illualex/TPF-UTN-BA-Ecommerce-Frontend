import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../hooks/useCart";
import "../styles/ProductsList.css";
import axios from "axios";

const ProductsList = ({ filter, searchResults }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (searchResults) {
      console.log(
        "Resultados de búsqueda pasados a ProductsList:",
        searchResults
      );
      setProducts(searchResults);
      setLoading(false);
    } else {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/products"
          );
          setProducts(response.data.payload.products);
          setLoading(false);
        } catch (err) {
          setError("Error al cargar los productos.");
          setLoading(false);
        }
      };

      fetchProducts();
    }
  }, [searchResults]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los productos.</p>;

  const filteredProducts = products.filter(
    (product) => filter.length === 0 || filter.includes(product.product)
  );

  console.log("Productos mostrados en ProductsList:", filteredProducts);

  return (
    <div className="products-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            addItemToCart={addToCart}
          />
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default ProductsList;

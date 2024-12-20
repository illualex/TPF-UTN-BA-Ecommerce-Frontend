import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";
import "../styles/ProductCarousel.css";
import axiosInstance from "../utils/axiosConfig";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/api/products");
        setProducts(response.data.payload.products);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los productos.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Swiper
        className="product-carousel"
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          426: { slidesPerView: 2, spaceBetween: 20 },
          769: { slidesPerView: 3, spaceBetween: 30 },
          1025: { slidesPerView: 4, spaceBetween: 40 },
          1441: { slidesPerView: 5, spaceBetween: 50 },
        }}
        navigation
        autoplay={{ delay: 10000 }}
        loop
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              id={product.id}
              image={product.image}
              title={product.name}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductCarousel;

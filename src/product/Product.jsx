import React, { useState, useEffect, useContext, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import axios from 'axios';
import { ProductContext } from "../context/ProductContext.jsx";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const productRef = useRef([]); 
  const { setSelectedProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://markly-backend-2.onrender.com/api/products/product'); 
        setProducts(response.data); 
        setLoading(false); // Set loading to false once products are fetched
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (item) => {
    setSelectedProduct(item);
    navigate('/productdeatils');
    window.scrollTo(0, 0);
  };

  useGSAP(() => {
    productRef.current.forEach((product, index) => {
      gsap.fromTo(
        product,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2, 
          scrollTrigger: {
            trigger: product,
            start: "top bottom",
            toggleActions: "play none none",
          },
        }
      );
    });
  }, [products]); 

  return (
    <section className="bg-gray-100">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-2 py-10 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {loading ? (
          // Show shimmer effect while loading
          [...Array(15)].map((_, index) => (
            <div key={index} className="relative w-full sm:w-[48%] md:w-auto aspect-[16/9] rounded-md md:aspect-auto h-[400px] shimmer-container">
              <div className="shimmer-box"></div> 
            </div>
          ))
        ) : (
          products.map((item, index) => (  // Reversing the product array
            <div
              key={index}
              className="relative w-full sm:w-[48%] md:w-auto aspect-[16/9] rounded-md md:aspect-auto h-[400px] product"
              ref={(el) => (productRef.current[index] = el)}
              onClick={() => handleAddToCart(item)} 
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute bottom-0 w-full blur-ef p-4 left-0 text-left bg-gradient-to-t from-gray-900">
                <h1 className="text-lg font-semibold text-white">{item.title}</h1>
                <p className="mt-2 text-sm text-gray-300">{item.description}</p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" onClick={() => handleAddToCart(item)}>
                  Add To Cart →
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Product;

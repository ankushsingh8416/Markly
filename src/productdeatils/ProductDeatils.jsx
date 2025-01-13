import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetails = () => {
  const { selectedProduct, addToCart } = useContext(ProductContext);
  const navigate = useNavigate()

  if (!selectedProduct) {
    return (
      <div className="flex gap-4 justify-center text-2xl font-bold items-center text-center py-20 text-gray-500">
        No product selected.
        <Link to="/product">
          <button className="bg-black w-full  text-white px-6 py-3 text-lg font-semibold rounded hover:bg-gray-800 transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    toast.success(`Successfully added to cart!`);
  
    setTimeout(() => {
      navigate("/cart");
      window.scrollTo(0, 0); 
    }, 2000);
  
  };
  

  return (
    <div className="bg-white py-4 lg:py-8">
      <Link to="/product">
        <h2 className="hidden w-[40px] h-[40px] rounded-full back justify-center md:flex items-center absolute top-[90px] left-3 lg:left-16">
          <FaArrowLeft className="text-2xl font-bold" />
        </h2>
      </Link>

      <section className="overflow-hidden py-2 lg:py-12">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="mx-auto flex flex-wrap lg:flex-nowrap items-start lg:w-4/5 lg:gap-8">
            <img
              alt={selectedProduct.title}
              className="w-full rounded-lg object-cover shadow-md lg:h-96 lg:w-1/2"
              src={selectedProduct.imageUrl}
            />
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
              <h2 className="text-sm font-medium uppercase tracking-widest text-gray-400">
                {selectedProduct.title}
              </h2>
              <h1 className="mt-2 text-3xl font-semibold text-gray-800">{selectedProduct.title}</h1>
              <div className="mt-4 flex items-center">
                <span className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                  <span className="ml-3 inline-block text-xs font-medium text-gray-500">
                    4 Reviews
                  </span>
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-gray-600">
                {selectedProduct.description}
              </p>

              <div className="mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                <div className="flex items-center">
                  <span className="mr-3 text-sm font-medium text-gray-600">Color</span>
                  <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                  <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                  <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
                </div>
                <div className="ml-auto flex items-center">
                  <span className="mr-3 text-sm font-medium text-gray-600">Size</span>
                  <div className="relative">
                    <select className="appearance-none rounded border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-gray-500 focus:ring-2 focus:ring-gray-400">
                      <option>8 UK</option>
                      <option>9 UK</option>
                      <option>10 UK</option>
                    </select>
                    <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="title-font text-2xl font-bold text-gray-900">
                  ₹{selectedProduct.price}
                </span>
                <button
                  type="button"
                  className="rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-gray-800 focus:ring-2 focus:ring-black"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;

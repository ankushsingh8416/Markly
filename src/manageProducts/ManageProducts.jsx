import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserCircle, FaRegTrashAlt } from "react-icons/fa";
import ScrollLink from "../ScrollLink";

const Shimmer = () => {
  return (
    <tr className="border-b border-gray-200 animate-pulse">
      <td className="p-2 border-b border-r border-gray-300 text-center">
        <div className="w-12 h-12 bg-gray-300 rounded m-auto"></div>
      </td>
      <td className="p-3 border-b border-r border-gray-300 text-center">
        <div className="h-4 bg-gray-300 rounded w-3/4 m-auto"></div>
      </td>
      <td className="p-3 border-b border-r border-gray-300 text-center">
        <div className="h-4 bg-gray-300 rounded w-1/2 m-auto"></div>
      </td>
      <td className="p-3 border-b border-r border-gray-300 text-center">
        <div className="h-4 bg-gray-300 rounded w-3/4 m-auto"></div>
      </td>
      <td className="p-3 border-b border-r border-gray-300 text-center">
        <div className="h-4 bg-gray-300 rounded w-1/2 m-auto"></div>
      </td>
      <td className="p-3 border-b border-gray-300 text-center">
        <div className="flex justify-center">
          <div className="h-4 bg-gray-300 rounded w-1/4 m-1"></div>
        </div>
      </td>
    </tr>
  );
};

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://markly-backend-2.onrender.com/api/products/product"
        );
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <main className="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-md">
        <header className="bg-white sticky top-0 shadow-md py-4 px-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold text-black">Manage Your Products</h1>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <ScrollLink to={"/CreateContainer"}>
                <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md shadow">
                  + Add Product
                </button>
              </ScrollLink>
              <div className="flex items-center text-gray-600">
                <FaUserCircle className="text-3xl" />
                <span className="ml-2 font-medium">Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Container for scrollable table */}
        <div className="overflow-x-auto w-full bg-white rounded shadow-lg border border-gray-300">
          <table className="w-full md:min-w-[1000px]">
            <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <tr>
                {["Photo", "Name", "Price", "Color", "Created At", "Actions"].map((header) => (
                  <th className="p-3 border-b border-gray-300 text-center" key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {loading
                ? Array.from({ length: 5 }).map((_, index) => <Shimmer key={index} />)
                : products.slice().reverse().map((product) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-100" key={product._id}>
                      <td className="p-2 border-b border-r border-gray-300 text-center">
                        <img
                          src={product.imageUrl}
                          alt={product.title}
                          className="w-12 h-12 rounded m-auto object-cover"
                        />
                      </td>
                      <td className="p-3 font-bold text-black border-b border-r border-gray-300 text-center">{product.title}</td>
                      <td className="p-3 font-bold text-black border-b border-r border-gray-300 text-center">₹ {product.price}</td>
                      <td className="p-3 font-bold text-black border-b border-r border-gray-300 text-center">{product.color}</td>
                      <td className="p-3 font-bold text-black border-b border-r border-gray-300 text-center">05 Sep 2023 3:10 PM</td>
                      <td className="p-3 border-b border-gray-300 text-center">
                        <button className="text-red-500 text-xl hover:text-red-700">
                          <FaRegTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
};

export default ManageProducts;

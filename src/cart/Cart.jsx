import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { AiOutlineDelete } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import ScrollLink from "../ScrollLink";

const Cart = () => {
    const { cart, removeFromCart } = useContext(ProductContext);
    const [heart, setHeart] = useState(Array(cart.length).fill(false)); 

    const toggleHeart = (index) => {
        const updatedHeart = [...heart];
        updatedHeart[index] = !updatedHeart[index]; 
        setHeart(updatedHeart);
    };

    return (
        <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
            <h2 className="text-3xl font-bold">Your cart {cart.length}</h2>
            <p className="mt-3 text-sm font-medium text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius
                repellat ipsam, sit praesentium incidunt.
            </p>

            <ul className="flex flex-col divide-y divide-gray-200">
                {cart.map((item, index) => (
                    <li key={index} className="border-b border-1 border-gray-100 flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img
                                className="h-20 w-20 flex-shrink-0 rounded object-cover sm:h-32 sm:w-32"
                                src={item.imageUrl}
                                alt={item.title}
                            />
                            <div className="flex w-full flex-col justify-between pb-4">
                                <div className="flex w-full justify-between space-x-2 pb-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm">{item.color}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">₹{item.price}</p>
                                    </div>
                                </div>
                                <div className="flex divide-x text-sm">
                                    <button
                                        type="button"
                                        className="flex items-center space-x-2 px-2 py-1 pl-0"
                                        onClick={() => removeFromCart(index)}
                                    >
                                        <AiOutlineDelete className="text-red-500" size={20} />
                                        <span className="text-red-500">Remove</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="flex items-center space-x-2 px-2 py-1"
                                        onClick={() => toggleHeart(index)}
                                    >
                                        {heart[index] ? (
                                            <div className="w-10 h-10 bg-red-100 rounded-full flex justify-center items-center">
                                                <FaHeart className="text-red-600 text-lg" />
                                            </div>
                                        ) : (
                                            <div className="w-10 h-10 bg-red-50 rounded-full flex justify-center items-center">
                                                <FaRegHeart className="text-red-600 text-lg" />
                                            </div>
                                        )}
                                        <span>Add to favorites</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="space-y-1 text-right">
                <p>
                    Total amount:
                    <span className="font-semibold">
                        ₹{cart.reduce((total, item) => total + item.price, 0)}
                    </span>
                </p>
            </div>

            <div className="flex justify-end space-x-4">
                <ScrollLink to={"/product"}>
                    <button
                        type="button"
                        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm"
                    >
                        Back to shop
                    </button>
                </ScrollLink>

                <ScrollLink to={"/checkout"}>

                    <button
                        type="button"
                        className="rounded-md border border-black text-white px-3 py-2 text-sm font-semibold bg-black shadow-sm"
                    >
                        Checkout
                    </button>

                </ScrollLink>

            </div>
        </div>
    );
};

export default Cart;

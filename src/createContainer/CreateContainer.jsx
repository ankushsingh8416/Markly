import React, { useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { RiShoppingBagFill } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../Loader/loader';
import { IoMdColorPalette } from "react-icons/io";
import { FaWandMagicSparkles } from "react-icons/fa6";

const APIURL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCvdEBSjT8wGlP9KV-gqD393D7qC4yRlTo';

const CreateContainer = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description || !price || !image || !color) {
            toast.error('Please fill all fields and upload an image');
            return;
        }

        setIsLoading(true);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('color', color);
        formData.append('uploadimage', image);

        try {
            const response = await fetch('https://markly-backend-2.onrender.com/api/products/product', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                toast.success('Product added successfully');
                resetForm();
            } else {
                toast.error('Failed to add product');
            }
        } catch (error) {
            toast.error('Something went wrong: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setPrice('');
        setColor('');
        setImage(null);
        setImagePreview(null);
    };

    const genratedec = async () => {
        if (!title) {
            toast.error('Please provide a product title  before generating the description');
            return;
        }

        setIsGenerating(true);
        try {
            const response = await fetch(APIURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `Write a short description of a lady's bag in 20 to 30 words. The product name is '${title}', and it is sold by Lady Bag, a stylish and trendy boutique.` }] }]
                }),
            });

            const data = await response.json();
            const productdec = data.candidates[0].content.parts[0].text;
            animateDescriptionLetterByLetter(productdec);
        } catch (error) {
            console.error('Error generating description:', error);
            toast.error('Error generating description');
        }
    };

    const animateDescriptionLetterByLetter = (fullDescription) => {
        let currentText = '';
        let letterIndex = 0;

        const interval = setInterval(() => {
            currentText += fullDescription[letterIndex];
            setDescription(currentText);
            letterIndex++;

            if (letterIndex === fullDescription.length) {
                clearInterval(interval);
                setIsGenerating(false);

            }
        }, 50);
    };

    return (
        <>
            <div className="w-full min-h-screen pt-12 flex items-center justify-center bg-gray-100">
                <div className="w-[90%] md:w-[50%] bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center gap-6">
                    <h2 className="text-2xl font-bold text-gray-800">Add New Product</h2>

                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
                        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                            <RiShoppingBagFill className="text-xl text-gray-700" />
                            <input
                                type="text"
                                placeholder="Product Title..."
                                className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-gray-800"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="w-full py-2 relative">
                            <textarea
                                placeholder="Write a description for the product..."
                                rows="4"
                                className="w-full h-full text-lg bg-transparent outline-none border border-gray-300 rounded-md p-3 placeholder:text-gray-400 text-gray-800"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <div
                                onClick={genratedec}
                                className={`ai bg-gray-100 absolute right-2 bottom-5 items-center space-x-2 cursor-pointer p-2 px-4 rounded-3xl transition-colors duration-300 inline-flex overflow-hidden group  ${isGenerating ? 'shimmer-effect' : ''}`}
                            >
                                <p className="text-sm font-semibold">{isGenerating ? 'Generating...' : 'Use AI'}</p>
                                <FaWandMagicSparkles className="animate-spin-slow text-[#FFD700] text-xl" />
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 group-hover:animate-shine"></span>
                            </div>

                        </div>

                        <div className="group flex justify-center items-center flex-col border-2 h-40 border-dotted border-gray-300 w-full cursor-pointer rounded-lg transition duration-200 ease-in-out hover:border-gray-500">
                            <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                    {imagePreview ? (
                                        <img src={imagePreview} alt="Preview" className="object-cover h-full" />
                                    ) : (
                                        <>
                                            <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700 transition duration-200" />
                                            <p className="text-gray-500 hover:text-gray-700 transition duration-200">
                                                Click here to upload
                                            </p>
                                        </>
                                    )}
                                </div>
                                <input type="file" name="uploadimage" accept="image/*" className="w-0 h-0" onChange={handleImageUpload} />
                            </label>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 w-full">
                            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                                <span className="text-gray-700 text-2xl">₹</span>
                                <input
                                    type="text"
                                    placeholder="Price"
                                    className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-gray-800"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>

                            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                                <span className="text-gray-700 text-2xl"><IoMdColorPalette /></span>
                                <input
                                    type="text"
                                    placeholder="Color"
                                    className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-gray-800"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full">
                            <button
                                type="submit"
                                className="ml-0 md:ml-auto text-center w-full md:w-auto border-none outline-none bg-black hover:bg-gray-800 transition-all duration-300 ease-in-out px-12 py-3 rounded-lg text-lg text-white font-semibold"
                                disabled={isLoading}
                            >
                                {isLoading ? <Loader /> : 'Add Product'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default CreateContainer;

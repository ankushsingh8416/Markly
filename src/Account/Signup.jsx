import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../Loader/loader';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const signupData = {
            username,
            email,
            password,
        };

        setIsLoading(true); // Set loading state to true when submitting

        try {
            const response = await axios.post('https://markly-backend-2.onrender.com/api/auth/register', signupData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                toast.success('Signup successful');

                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error('User already registered');
            } else {
                toast.error('Failed to register user');
            }
        } finally {
            setIsLoading(false); // Reset loading state after response
        }

        // Clear input fields
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <ToastContainer />

            <section className='bg-[#50220E]'>
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 ">
                    <div className="mx-auto w-full md:w-[600px] rounded md:rounded-xl bg-white py-12 px-8 md:p-12">
                        <div className="mb-4 flex justify-center">
                            <div className="logo flex space-x-2 items-center">
                                <img src="/images/black-logo.png" alt="Markly Logo" className="h-8" />
                                <h2 className="text-2xl tarjan">Markly</h2>
                            </div>
                        </div>
                        <h2 className="text-center text-2xl font-bold leading-tight text-black">
                            Sign up to create an account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Already have an account?
                            <Link
                                to={"/login"}
                                className="font-semibold text-black transition-all duration-200 hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>
                        <form onSubmit={handleSubmit} className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                            disabled={isLoading} // Disable input when loading
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            disabled={isLoading} // Disable input when loading
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-base font-medium text-gray-900">
                                            Password
                                        </label>
                                        <a
                                            href="#"
                                            className="text-sm font-semibold text-black hover:underline"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            disabled={isLoading} // Disable input when loading
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        disabled={isLoading} // Disable button when loading
                                    >
                                        {isLoading ? (
                                            <Loader />
                                        ) : (
                                            <>
                                                Get started
                                                <FaArrowRight className="ml-2" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signup;

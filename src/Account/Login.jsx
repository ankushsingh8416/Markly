import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../Loader/loader';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            email,
            password,
        };

        setIsLoading(true); 

        try {
            const response = await axios.post('https://markly-backend-2.onrender.com/api/auth/login', loginData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', response.data.username); 
                toast.success('Login successful');

                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                toast.error('Login failed');
            }
        } catch (error) {
            toast.error('Something went wrong!');
        } finally {
            setIsLoading(false); // Reset loading state after response
        }

        // Clear input fields
        setEmail('');
        setPassword('');
    };

    return (
        <>
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
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 ">
                            Don&#x27;t have an account?
                            <Link
                                to={"/signup"} title=""
                                className="font-semibold text-black transition-all duration-200 hover:underline"
                            >
                                Create a free account
                            </Link>
                        </p>
                        <form onSubmit={handleSubmit} className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            placeholder="Email"
                                            name='email'
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
                                            title=""
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
                                            name='password'
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
                                                <FaArrowRight className="font-bold ml-2" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}

export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${input}`);
    };

    return (
        <>
            <div className="bg-white p-4 shadow-md fixed w-full top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white">
                        <Link to='/' className='text-4xl font-bold text-black sofia-text' >
                            MK Cusines
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-5 text-2xl">
                        <Link to={`/category/indian`} className="text-black">
                            Indian
                        </Link>
                        <Link to={`/category/american`} className="text-black">
                            American
                        </Link>
                        <Link to={`/category/british`} className="text-black">
                            British
                        </Link>
                        <Link to={`/category/chinese`} className="text-black">
                            Chinese
                        </Link>
                        <Link to={`/category/thai`} className="text-black">
                            Thai
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <form onSubmit={handleSubmit} className="mr-4">
                            <input
                                onChange={(e) => setInput(e.target.value)}
                                type="text"
                                className="p-2 rounded focus:outline-none bg-orange text-white"
                                placeholder="Search..."
                            />
                        </form>
                        {/* Add any additional right-side elements here */}
                    </div>
                </div>
            </div>
            {/* Placeholder for content to avoid overlapping with the fixed navbar */}
            <div className="h-16 bg-orange-500"></div>
        </>
    );
};

export default Navbar;

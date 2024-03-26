import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { VscThreeBars } from "react-icons/vsc";
import { FaChevronCircleLeft } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
    const [openModalFromRight, setOpenModalFromRight] = useState(false)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    const handleClickButton = () => {
        setOpenModalFromRight(!openModalFromRight)
    }

    return (
        <>
            <nav className="fixed z-50 bg-slate-200 w-full h-[80px]">
                <div className="flex justify-between items-center p-3">
                    <button className='pl-3'>
                        <Link to="/" className="">
                            <img src='./images\w4alll png.png'
                                className='h-16 w-auto object-contain'
                            />
                        </Link>
                    </button>
                    <button className='md:hidden w-8 h-8 flex justify-center rounded items-center border border-black'
                        onClick={handleClickButton}
                    >
                        <VscThreeBars size={25} color='#000' />
                    </button>

                    <ul className='md:flex hidden md:pr-10 md:gap-4'>
                        <li className=''>
                            <Link to='/' className='nav-links hover:text-green-600' onClick={handleClickButton}>
                                Home
                            </Link>
                        </li>

                        <li className=''>
                            <Link to='/about' className='nav-links hover:text-green-600' onClick={handleClickButton}>
                                About
                            </Link>
                        </li>
                        <li className=''>
                            <Link to='/services' className='nav-links hover:text-green-600' onClick={handleClickButton}>
                                Services
                            </Link>
                        </li>
                        <li className=''>
                            <Link to='/contact' className='nav-links hover:text-green-600' onClick={handleClickButton}>
                                Contact
                            </Link>
                        </li>
                        <Link to='/story' onClick={handleClickButton}></Link>
                        <li className="signUp-button">
                            <Link to='/feedback' className="relative z-10">
                               Feedback
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
            {isMobile && (
                <CSSTransition
                    in={openModalFromRight}
                    timeout={1000}
                    classNames="modal"
                    unmountOnExit
                >
                    <div className="fixed top-0 right-0 bottom-0 w-1/3 shadow-md z-50 bg-black">
                        <div className="bg-gray-800 text-white p-3 flex items-center justify-between shadow-md">
                            <button onClick={handleClickButton}>
                                <FaChevronCircleLeft size={25} color='white' />
                            </button>
                            <p className="text-lg font-semibold">Navigation </p>
                            <div className='w-5'></div>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <ul className="mt-4 flex flex-col gap-5">
                                <li className="py-2">
                                    <Link to="/" className="text-white hover:text-green-600 hover:bg-gray-700 px-4 py-2 rounded-lg" onClick={handleClickButton}>
                                        Home
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link to="/about" className="text-white hover:text-green-600 hover:bg-gray-700 px-4 py-2 rounded-lg" onClick={handleClickButton}>
                                        About
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link to="/services" className="text-white hover:text-green-600 hover:bg-gray-700 px-4 py-2 rounded-lg" onClick={handleClickButton}>
                                        Services
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link to="/contact" className="text-white hover:text-green-600 hover:bg-gray-700 px-4 py-2 rounded-lg" onClick={handleClickButton}>
                                        Contact
                                    </Link>
                                </li>
                                <li className="py-2">
                                    <Link to="/feedback" className="text-white hover:text-green-600 hover:bg-gray-700 px-4 py-2 rounded-lg" onClick={handleClickButton}>
                                        Feedback
                                    </Link>
                                </li>
                            </ul>
                        </div>


                    </div>
                </CSSTransition>
            )}
        </>
    );
}

export default Navbar;

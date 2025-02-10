import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isMenu, setMenu] = useState(false);

    return (

        <div className={`flex justify-between items-center w-full mx-auto  md:px-24 px-7 md:py-3 py-2 shadow-green-300/50 shadow-lg `}>
            <div className='flex gap-5 items-center'>
                <Link to='/'><img src="./cal.jpg" alt="" className='w-16'/></Link>

            </div>
            <div className={`md:flex hidden gap-5 text-xl font-medium`}>
                <Link to='/' className='hover:text-green-300 hover:cursor-pointer hover:scale-110'>Basic</Link>
                <Link to='/advanced' className='hover:text-green-300 hover:cursor-pointer hover:scale-110'>Advanced</Link>
            </div>


            <FiMenu
                onClick={() => setMenu(true)}
                className="text-3xl cursor-pointer md:hidden"
            />

            <div
                className={`absolute h-screen w-screen flex justify-center items-center z-40 lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-transform duration-300 ${isMenu ? "scale-100" : "scale-0"}`}
            >
                <section
                    className="bg-white h-64 flex-col justify-center items-center p-8 gap-4 flex w-2/3 rounded-2xl relative">
                    <IoCloseOutline
                        onClick={() => setMenu(false)}
                        className="text-3xl mt-0 mb-4 text-black cursor-pointer absolute right-2 top-2"
                    />
                    <div
                        className='flex items-center gap-5 flex-col text-xl font-medium text-black'>
                        <Link to='/' className='focus:text-green-300' onClick={() => setMenu(false)}>Basic</Link>
                        <Link to='/advanced' className='focus:text-green-300' onClick={() => setMenu(false)}>Advanced</Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Navbar;
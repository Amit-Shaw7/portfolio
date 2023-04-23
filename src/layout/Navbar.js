import React, { useState } from 'react';
import { MdDarkMode, MdMenu, MdClose, MdDownload } from 'react-icons/md';
import { links } from '../mocks';


const Navbar = ({ dark, setDark }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMode = () => {
        setDark(!dark);
        console.log(dark);
    }

    return (
        <div className={`backdrop-blur-md sticky top-0 ${dark === true ? "shadow-property-dark" : "shadow-property-light"}  w-[100vw] h-[70px] flex items-center md:justify-around justify-between z-10 dark:bg-black bg-[#F6F6F6] opacity-80`}>
            {/* Logo */}
            <div className='ml-8 lg:ml-0 flex items-center'>
                <h3 className='font-extrabold tracking-wider dark:text-white text-black cursor-pointer text-2xl'>A<span className='text-red-500'>m</span>it</h3>
            </div>

            {/* Navbar links */}
            <div className={`custom-transition overflow-hidden ${menuOpen ? "absolute top-0 w-full dark:bg-slate-900 bg-[#b7b7b7] bg h-[80vh]" : "md:w-[55%] h-[60px]"}`}>
                <ul className={`text-black md:flex dark:text-white hover:text-black h-[100%] font-medium items-center justify-around ${menuOpen ? "relative flex-col flex" : "flex-row hidden"}`}>
                    {
                        links?.map((item) => (
                            <li onClick={() => setMenuOpen(false)} className='font-bold tracking-wider custom-transition cursor-pointer px-3 py-1 rounded-md hover:bg-red-500 text-sm lg:text-[1rem]'><a href={item?.link}>{item?.title}</a></li>
                        ))
                    }
                    <a download href="/amitKumarShawResume.pdf" onClick={() => setMenuOpen(!menuOpen)} className='flex md:hidden items-center font-bold tracking-wider custom-transition cursor-pointer px-3 py-1 rounded-md bg-red-500 hover:bg-transparent border-[1px] border-red-500 dark:text-black  text-md dark:hover:text-white hover:text-black scroll-smooth'><MdDownload /> &nbsp;&nbsp;Resume</a>
                </ul>
            </div>

            {/* Buttons */}
            <div className='flex items-center'>
                <button onClick={toggleMode} className='custom-transition hover:scale-125 mx-2 p-1 items-center justify-center'><MdDarkMode fontSize="1.2rem" color={`${dark === true ? "white" : "black"}`} /></button>
                
                <button onClick={() => setMenuOpen(!menuOpen)} className='relative z-10 flex  md:hidden mr-8 items-center justify-center'>
                    {
                        menuOpen ? <MdClose rotate="" fontSize="2rem" color={`${dark ? "white" : "black"}`} /> : <MdMenu fontSize="2rem" color={`${dark ? "white" : "black"}`} />
                    }
                </button>

                <a href="/amitKumarShawResume.pdf" download className='hidden md:flex items-center mx-1 font-bold tracking-wider custom-transition cursor-pointer px-3 py-1 rounded-md border-[1px] border-red-500 bg-red-500 hover:bg-transparent text-black text-md dark:hover:text-white'><MdDownload /> &nbsp;Resume</a>

            </div>
        </div>
    )
}
export default Navbar;
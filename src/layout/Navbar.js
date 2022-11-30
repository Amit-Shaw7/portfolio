import React, { useState } from 'react';
import { MdDarkMode, MdMenu, MdClose } from 'react-icons/md';

const Navbar = ({ dark, setDark }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMode = () => {
        setDark(!dark);
        console.log(dark);
    }

    return (
        <div className={`sticky top-0 ${dark === true ? "shadow-property-dark" : "shadow-property-light"}  w-[100vw] h-[60px] flex items-center md:justify-around justify-between z-10 dark:bg-black bg-[#F6F6F6] opacity-80`}>
            {/* Logo */}
            <div className='ml-8 lg:ml-0'>
                <h1 className='flex items-center font-extrabold tracking-widest dark:text-white text-black cursor-pointer md:text-3xl text-2xl'><span className='text-red-500 text-3xl md:text-4xl'>A</span>mi<span className='text-red-500 text-3xl md:text-4xl'>t</span></h1>
            </div>

            {/* Navbar links */}
            <div className={`custom-transition overflow-hidden ${menuOpen ? "absolute top-0 w-full dark:bg-slate-900 bg-[#b7b7b7] bg h-[60vh]" : "md:w-[50%] h-[60px]"}`}>
                <ul className={`text-black md:flex dark:text-white hover:text-black h-[100%] font-medium items-center justify-around ${menuOpen ? "relative flex-col flex" : "flex-row hidden"}`}>
                    <li onClick={() => setMenuOpen(false)} className='font-bold tracking-wider custom-transition cursor-pointer px-3 py-1 rounded-md hover:bg-red-500 text-sm lg:text-xl'><button>Home</button></li>
                    <li onClick={() => setMenuOpen(false)} className='font-bold tracking-wider custom-transition cursor-pointer px-3 py-1 rounded-md hover:bg-red-500 text-sm lg:text-xl scroll-smooth'><a href='#about'>About</a></li>
                    <li onClick={() => setMenuOpen(false)} className='font-bold tracking-wider custom-transition cursor-pointer px-3 py-1 rounded-md hover:bg-red-500 text-sm lg:text-xl scroll-smooth'><a href='#skills'>Skills</a></li>
                    <li onClick={() => setMenuOpen(false)} className='font-bold tracking-wider custom-transition cursor-pointer px-3 py-1 rounded-md hover:bg-red-500 text-sm lg:text-xl scroll-smooth'><a href='#projects'>Projects</a></li>
                    <li onClick={() => setMenuOpen(false)} className='font-bold tracking-wider custom-transition cursor-pointer px-3 py-1 rounded-md hover:bg-red-500 text-sm lg:text-xl scroll-smooth'><a href='#contact'>Contact</a></li>
                    <li onClick={() => { setMenuOpen(false); toggleMode() }} className='flex md:hidden font-bold tracking-wider custom-transition cursor-pointer px-3 py-1 rounded-md hover:bg-red-500 hover:text-black text-md text-black dark:text-white scroll-smooth'><button className='flex items-center'><MdDarkMode color={`${dark === true ? "white" : "black"}`} className='mx-1' />{dark ? "Light Mode" : "Dark Mode"}</button></li>

                    <li onClick={() => setMenuOpen(!menuOpen)} className='flex md:hidden font-bold tracking-wider custom-transition cursor-pointer px-3 py-1 rounded-md bg-red-500 hover:bg-transparent border-[1px] border-red-500 dark:text-black  text-md dark:hover:text-white hover:text-black scroll-smooth'><a href='#hire'>Hire Me</a></li>
                </ul>
            </div>

            {/* Buttons */}
            <div className='flex items-center'>
                <button onClick={() => setMenuOpen(!menuOpen)} className='relative z-10 flex  md:hidden mr-8 items-center justify-center'>
                    {
                        menuOpen ? <MdClose rotate="" fontSize="2rem" color={`${dark ? "white" : "black"}`} /> : <MdMenu fontSize="2rem" color={`${dark ? "white" : "black"}`} />
                    }
                </button>

                <button onClick={toggleMode} className='custom-transition hover:scale-125 mx-2 p-1 hidden md:flex items-center justify-center'><MdDarkMode fontSize="1.2rem" color={`${dark === true ? "white" : "black"}`} /></button>

                <button className='hidden md:flex mx-1 font-bold tracking-wider custom-transition cursor-pointer px-3 py-1 rounded-md border-[1px] border-red-500 bg-red-500 hover:bg-transparent text-black text-md dark:hover:text-white'><a href='#hire'>Hire me</a></button>

            </div>


        </div>
    )
}
export default Navbar;
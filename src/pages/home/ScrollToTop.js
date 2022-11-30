import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    return (
        <div onClick={() => { window.scrollTo(0, 0) }} className='fixed top-[90vh] right-[5vh]'>
            <button className='p-3 flex items-center justify-center bg-red-500 text-black rounded-full'><FaArrowUp /></button>
        </div>
    )
}

export default ScrollToTop
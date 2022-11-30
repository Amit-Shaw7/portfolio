import React from 'react';
const Hero = () => {
    return (
        <div className='h-[90vh] hero-section overflow-y-hidden flex items-center justify-center p-1'>
            <div className='dark:text-white text-black font-bold flex items-center justify-center flex-col'>
                <p className='text-center text-4xl'>Hello<span className='text-red-500'>...🙋‍♂️</span></p>
                <p className='text-center mt-4 sm:text-6xl text-4xl'>I am &nbsp;&nbsp;<span className='text-red-500 font-extrabold font-mono tracking-wider'>AMIT KUMAR SHAW</span>, </p>
                <p className='text-center mt-4 sm:text-4xl text-2xl text-slate-600 font-semibold'>A FULL STACK WEB DEVELOPER</p>
                <a href='#contact' className='rounded-md mt-8 px-3 py-2 bg-red-500 text-black font-bold text-xl custom-transition hover-property font-mono'>Get in touch</a>
                {/* <button className='rounded-md mt-8 text-white bg-slate-700 font-bold text-2xl custom-transition  font-mono flex items-center'><FaLinkedin/></button>
                <button className='rounded-md mt-8 text-white bg-slate-700 font-bold text-2xl custom-transition  font-mono flex items-center'><FaLinkedin/></button> */}
            </div>
        </div>
    )
}

export default Hero
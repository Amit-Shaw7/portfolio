import React from 'react';
import { MdMail, MdLocationOn } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id="contact" className='mt-20 dark:text-white text-black w-full lg:px-20 px-8 min-h-[70vh]'>
            {/* Heading */}
            <h1 className="text-center underline decoration-red-500 text-3xl">Contact me</h1>

            {/* Body */}
            <div className='mt-8 min-h-[60vh] lg:px-4 flex items-center justify-center w-[100%] flex-wrap '>
                <div className="my-4 mx-4 p-4 flex flex-col items-center justify-center h-[18rem] w-[18rem] rounded-xl hover:scale-125 custom-transition">
                    <MdMail color='#EF4444' className='rounded-xl' fontSize="5rem" />
                    <p className='my-4'>Email</p>
                    <span><strong>maahiamit777@gmail.com</strong></span>
                </div>
                <a rel="noreferrer" target="_blank" href='https://www.github.com/Amit-Shaw7'><div className="my-4 mx-4 p-4 flex flex-col items-center justify-center h-[18rem] w-[18rem] rounded-xl hover:scale-125 custom-transition">
                    <FaGithub color='#EF4444' fontSize="5rem" />
                    <p className='my-4'>Github</p>
                    <span><strong>Amit-Shaw7</strong></span>
                </div></a>
                <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/amit-shaw-a95121230'><div className="my-4 mx-4 p-4 flex flex-col items-center justify-center h-[18rem] w-[18rem] rounded-xl hover:scale-125 custom-transition">
                    <FaLinkedin color='#EF4444' fontSize="5rem" />
                    <p className='my-4'>Linkedin</p>
                    <span><strong>amit-shaw-a95121230</strong></span>
                </div></a>
                <div className="my-4 mx-4 p-4 flex flex-col items-center justify-center h-[18rem] w-[18rem] rounded-xl hover:scale-125 custom-transition">
                    <MdLocationOn color='#EF4444' fontSize="5rem" />
                    <p className='my-4'>Location</p>
                    <span><strong>Kolkata</strong></span>
                </div>
            </div>
        </div>
    )
}

export default Contact
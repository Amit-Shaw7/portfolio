import React, { useState } from 'react';
import Me from '../../assets/me.jpg';

const About = () => {
    const [visible, setVisible] = useState("edu");
    return (
        <div id="about" className='h-auto mt-8 text-black dark:text-white'>
            <h1 className="text-center decoration-red-500 underline text-3xl">About me</h1>

            {/* Main Container */}
            <div className="m-auto w-[95%] xl:[w-80%] h-full flex items-center justify-around flex-wrap box-border p-6">

                {/* Image */}
                <div className='rounded-xl h-[20rem] w-[20rem] md:h-[25rem] lg:h-[30rem] lg:w-[25rem] mr-2 mt-12'>
                    <img className='object-cover h-[100%] w-[100%]  rounded-[50%] md:rounded-xl' src={Me} alt="Me" />
                </div>


                {/* Details */}
                <div className='h-[85%] w-[40rem] py-8 px-3 flex items-center justify-center flex-col'>
                    <h2 className='text-xl mb-8 w-full text-center lg:text-left leading-loose'>Hello I am Amit Kumar Shaw. <br /> I am a FULLSTACK WEB DEVELOPER</h2>

                    {/* Button */}
                    <div className="flex w-full items-center text-md justify-center lg:justify-start">
                        <button onClick={() => setVisible("edu")} className={`py-2 ${visible === "edu" ? "border-red-500" : "dark:border-black border-white"} border-b-2 mr-4`}>Education</button>
                        <button onClick={() => setVisible("exp")} className={`py-2 ${visible === "exp" ? "border-red-500" : "dark:border-black border-white"} border-b-2`}>Experience</button>
                    </div>

                    {/* Desccription */}
                    <div className="mt-10 text-xl">
                        {
                            visible === "edu"
                                ?
                                <span className='leading-loose'>I am a <strong>BCA</strong> graduate from  <strong>The Heritage Academy</strong>  , Kolkata which is affiliated to <strong>MAKAUT</strong> University. <br />
                                    Batch : 2019-2022 <br />with CGPA : <strong>9.0</strong>
                                </span>
                                :
                                <span className='leading-loose'>
                                    Intern at <strong>"The Mango Jelly"</strong> working on <strong>React Js</strong> with <strong>MUI</strong> and <strong>Redux Toolkit</strong> .<br />
                                    As well as eager to start working for any orgainisation as a full time and start a professional career.
                                </span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
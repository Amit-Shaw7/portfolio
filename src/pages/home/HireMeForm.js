import React, { useRef } from 'react';
import toast from 'react-hot-toast';

const Login = () => {
    const email = useRef();
    const name = useRef();
    const org = useRef();
    const formRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const emailRequest = await window.Email.send({
                SecureToken : process.env.REACT_APP_SMTP_SECRET_KEY,
                To: 'maahiamit777@gmail.com',
                From: "amitkumar8017392@gmail.com",
                Subject: `!!!Hiring Alert From ${org.current.value}`,
                Body: `<h2 style="text-align:center;">Hey !! Someone recently visited your Portfolio website and liked it </h2><br/><h2 style="text-align:center;">They have sent a hiring request with details listed below...</h2> <br/>
                <h3 style="text-align:center;">Email : <span>${email.current.value}</span> <br/> Name : <span>${name.current.value}</span> <br/> Orgainization : <span style="color:red;">${org.current.value && org.current.value}</span></h3>`
            });
            if (emailRequest) {
                toast.success("Form Submitted I wil contact you ASAP");
                formRef.current.reset();
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    return (
        <div id='hire' className='min-h-[70vh] w-[100vw]  px-2 md:px-20'>
            <h1 className='text-3xl dark:text-white text-black text-center mt-20 underline decoration-red-500'>Hire Me</h1>
            <p className="dark:text-red-400 text-red-600 text-sm text-center my-12">**Just provide your name , email so that i can contact you ASAP**</p>
            <form ref={formRef} onSubmit={handleSubmit} className=' m-auto flex items-center justify-around flex-col gap-4 w-full md:w-[40rem] p-8'>

                <input ref={email} required type="email" className="dark:bg-slate-800 bg-slate-300 dark:text-white text-slate-700 font-bold rounded-md outline-none p-2 w-full" placeholder='Email' />

                <input ref={name} required type="text" className="dark:bg-slate-800 bg-slate-300 dark:text-white text-slate-700 font-bold rounded-md outline-none p-2 w-full" placeholder='Name' />

                <input ref={org} type="text" className="dark:bg-slate-800 bg-slate-300 dark:text-white text-slate-700 font-bold rounded-md outline-none p-2 w-full" placeholder='Orgainisation' />

                <button type='submit' className="py-2 px-6 bg-red-500 tracking-wide rounded-md text-white font-bold">SUBMIT</button>
            </form>
        </div>
    )
}

export default Login
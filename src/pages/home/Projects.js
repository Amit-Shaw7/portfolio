import React from 'react';
import { FaGithub, FaEye } from 'react-icons/fa';
import { projectArr } from '../../utils/projects';


const Projects = ({dark}) => {
    return (
        <div id="projects" className='min-h-[100vh] w-full lg:px-12 mt-20'>
            <h1 className="dark:text-white text-black text-3xl text-center underline decoration-red-500">Projects</h1>

            {/* Main Continer */}
            <div className="mt-8 min-h-[90vh] h-auto flex items-start align-top justify-center py-8 flex-wrap">
                {
                    projectArr?.map((project) => (
                        <div key={project?.id} className={`relative ${dark === true ? "custom-shadow-hard" : "custom-shadow-hard-light"} min-h-[20rem] w-[25rem] dark:text-white text-black rounded-sm flex flex-col items-center text-center p-2 m-8 hover:scale-110 custom-transition`}>
                            <img src={require("../../assets/projects/" + project.img)} className=" min-h-[12rem] object-cover" alt="" />
                            <span className='mt-3 text-xl underline decoration-red-500'><strong>{project?.title}</strong></span>
                            <p className='mt-3 text-center text-md'>{project?.desc}</p>
                            <hr />

                            <div className='custom-transition opacity-0 hover:opacity-100 absolute top-0 left-0 flex items-center justify-center h-[100%] w-[100%] bg-[rgba(0,0,0,0.8)] sm:flex-row flex-col'>
                                <a className='m-2 hover:bg-red-500 font-bold custom-transition cursor-pointer p-2 dark:bg-slate-700 bg-slate-400 rounded-md flex items-center' target="_blank" rel="noreferrer" href={project?.githubURL}><FaGithub fontSize="1.5rem" /></a>
                                <a className='m-2 hover:bg-red-500 font-bold custom-transition cursor-pointer p-2 dark:bg-slate-700 bg-slate-400 rounded-md flex items-center' target="_blank" rel="noreferrer" href={project?.siteURL}><FaEye fontSize="1.5rem" /></a>
                            </div>

                            <div className="flex justify-start w-full my-4">
                                {
                                    project?.skillUsed?.map((skill, idx) => (
                                        <div key={idx} className='h-[30px] w-[30px] p-1 border-[1px] flex items-center justify-center border-slate-500 mx-1 rounded-lg'>
                                            <img className='h-[80%] w-[80%] object-contain' src={require(`../../assets/skills/${skill}.png`)} alt={skill} />
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects

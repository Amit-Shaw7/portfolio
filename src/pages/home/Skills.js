import React from 'react';
import { skillArr } from '../../utils/skills';

const Skills = () => {
  return (
    <div id='skills' className='h-auto mt-20 flex items-center flex-col py-4'>
      <h1 className="text-center dark:text-white text-black text-3xl underline decoration-red-500">Skills</h1>

      <div className='h-[100%] w-[95%] flex items-center justify-center flex-wrap mt-8'>
        {
          skillArr.map((skill) => (
            <div key={skill.id} className='tooltip relative flex items-center justify-center mx-10 my-10 md:mx-16 h-[90px] w-[90px] md:h-[120px] md:w-[120px] border-[1px] border-slate-700 p-3 rounded-full'>
              <img src={require("../../assets/skills/" + skill.img)} className={`${skill?.name === "STYLED COMPONENTS" && "bg-black"} h-[80%] rounded-xl object-contain" alt="Tailwind`} alt={skill?.name}/>
              <span className='custom-transition uppercase bg-slate-500 p-1 rounded-md hidden absolute top-[-40px] text-white tooltip-text'>{skill?.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills
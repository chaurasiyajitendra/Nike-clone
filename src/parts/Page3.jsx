import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Page3 = () => {
  useGSAP(()=>{
    gsap.from('#page3Text',{y:-150,duration:2,opacity:0, stagger:0.2,scrollTrigger:{trigger:'#page3Text',start:'top 70%',end:'top 40%',scrub:true}})
  })
  return (
    <div className=' relative h-[40vh] w-full bg-white'>
        <div className='w-full mt-4 flex gap-4 px-15'>
            <h3 className='w-[35%] h-full text-xl font-[two] '>Vomero 18</h3>
            <h3 className='w-[35%] h-full text-xl font-[two] '>KD 18:Lasting Power</h3>
            <h3 className='w-[35%] h-full text-xl font-[two] '>The Dream Is Real</h3>
        </div>
        <div id='page3Text' className='mt-30 text-center overflow-hidden '>
          <h1 className='text-7xl font-[six] uppercase'>Bring the heat</h1>
          <h3 className='text-md font-[three]'>trun your offseason on with the last summer collection</h3>
          <button className='mt-2 py-1 px-3 rounded-3xl bg-black text-white font-[two]'>shop</button>
        </div>
    </div>
  )
}

export default Page3

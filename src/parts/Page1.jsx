import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { TimeLine } from '../campnent/timeline'

const Page1 = () => {
  const imgRef =useRef();
  useGSAP(()=>{
    TimeLine.from('#text h1',{y:-150,duration:0.3,stagger:0.15})
    TimeLine.from(imgRef.current,{
        scale:0,
        opacity:0,
        duration:0.5
    })
  })
  return (
    <div className=' relative h-[85vh]  w-full text-center font-[two] bg-[#f5f5f5]'>
        <div id='text' className=' overflow-hidden'>
          <h1 className='mt-1'>Move, Shop, Customise & Celebrate With Us</h1>
          <h1 className='font-[three] text-[0.7rem]'>No matter what you feel like doing today, It’s better as a Member.</h1>
          <h1 className='text-[0.9rem] mt-1 underline'>Join Us</h1> 
        </div>
          <div className='h-full w-full'>
          <img ref={imgRef} className='h-full w-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1837,c_limit/2f496f6c-775c-41ee-91e6-4655f52da085/nike-just-do-it.png" alt="" />
        </div>
    </div>
  )
}

export default Page1

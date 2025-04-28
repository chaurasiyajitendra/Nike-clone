import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page6 = () => {
     
          useGSAP(()=>{
               gsap.to('#fuck .shose', {
                    x: '-750%', // Use `x` for horizontal translation
                    scrollTrigger: {
                      trigger: '#fuck',
                      scroller: 'body', // Ensure this matches your scroller setup
                      start: 'top 10%',
                      end: 'top -100%',
                      scrub: 2,
                      pin: true,
                    },
                  })
          })

  return (
    <div className='h-screen w-full bg-white'>
        <div className='px-14'>
            <h1 className='mt-30 font-[two] text-2xl'>Shop by Icons</h1>
            <div id='fuck' className='whitespace-nowrap overflow-x-hidden flex items-center mt-4 gap-6'>
               <div className=' shose shrink-0 w-[30%] '>
                    <img className='w-full h-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_434,c_limit/c05dfab5-2d0e-48e3-8ca0-f04c21ccee2c/nike-just-do-it.png" alt="" />
               </div>
               <div className=' shose shrink-0 w-[30%]'>
                    <img className='w-full h-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_435,c_limit/c6ce0b87-cc23-4113-9d19-48248900eb0c/nike-just-do-it.png" alt="" />
               </div>
               <div className=' shose shrink-0 w-[30%]'>
                    <img className='w-full h-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_435,c_limit/9a1898f3-e10d-4df8-b2cf-e2b0735f7742/nike-just-do-it.png" alt="" />
               </div>
               <div className=' shose shrink-0 w-[30%]'>
                    <img className='w-full h-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/1892aab6-5b81-422f-b7e5-d5072294a299/nike-just-do-it.png" alt="" />
               </div>
               <div className=' shose shrink-0 w-[30%]'>
                    <img className='w-full h-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/8568c73b-a0b5-47e0-a9bc-409353e7272e/nike-just-do-it.png" alt="" />
               </div>
               <div className=' shose shrink-0 w-[30%]'>
                    <img className='w-full h-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_434,c_limit/2ea8fe0a-b92c-4eb0-8ae5-b80ffc95a7d2/nike-just-do-it.png" alt="" />
               </div>
               <div className=' shose shrink-0 w-[30%]'>
                    <img className='w-full h-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_434,c_limit/f520c30b-5385-4f77-bdc3-40d4878d0d55/nike-just-do-it.png" alt="" />
               </div>
               <div className=' shose shrink-0 w-[30%]'>
                    <img className='w-full h-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_434,c_limit/b9c593b6-f789-4459-abb3-4708eb84d047/nike-just-do-it.png" alt="" />
               </div>
               <div className=' shose shrink-0 w-[30%]'>
                    <img className='w-full h-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_434,c_limit/6e80dada-0014-441d-9d0e-986b36f1d817/nike-just-do-it.png" alt="" />
               </div>
               <div className=' shose shrink-0 w-[30%]'>
                    <img className='w-full h-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_434,c_limit/65d6ceb7-1c9e-41fb-8acc-37eb1799e1b8/nike-just-do-it.png" alt="" />
               </div>
            </div>
        </div>
    </div>
  )
}

export default Page6

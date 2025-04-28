import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TimeLine } from '../campnent/timeline';
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
    useGSAP(()=>{
        TimeLine.from('#page2',{
            y:-300,
            // opacity:0,
            scrollTrigger:{
                trigger:'#page2',
                start:'top 50%',
                end:'top 20%',
                scroller:'body',
                scrub:true
            }
        })
        TimeLine.from("#fe,#imge img ",{opacity:0,x:-100,stagger:0.7,scrollTrigger:{trigger:'#fe',start:'top 80%',end:'top 0%',scrub:true}})
    })
  return (
    <div  className='w-full bg-white'>
        <div id='page2' className='text-center'>
            <h1 className=' uppercase text-8xl mt-18 font-[six]'>The dream is real</h1>
            <h3 className='mt-1 text-md font-[four]'>Every goal is within reach in the kylian Mbappe Mercurial Superfly.</h3>
            <button className='mt-4 bg-black font-[two] text-white py-1 px-4 text-center rounded-4xl text-lg'>Shop</button>
        </div>
        <h1 id='fe' className='px-15 mt-30 text-2xl font-[four]'>Featured</h1>
        <div className='w-full mt-4 flex gap-4 px-15'>
            <div id='imge' className='w-[35%] h-full '><img className='h-[50%] w-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_368,c_limit/192be7e6-b3b8-4516-9852-094bc054c6d9/nike-just-do-it.png" alt="" /></div>
            <div id='imge' className='w-[35%] h-full'><img className='h-[50%] w-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_368,c_limit/a0b2a21b-0d3f-422d-86c1-1f33e55f5352/image.png" alt="" /></div>
            <div id='imge' className='w-[35%] h-full'><img className='h-[50%] w-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_368,c_limit/2c67ed72-9914-429b-b069-37412c9d7299/nike-just-do-it.png" alt="" /></div>
        </div>
     </div>
  )
}

export default Page2

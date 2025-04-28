import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page8 = () => {
    useGSAP(()=>{
        gsap.from("#miss",{
            x:-300,
            scrollTrigger:{
                trigger:'#miss',
                scroller:'body',
                start:"top 70%",
            }
        })
        gsap.from('#new',{
            y:300,
            scale:0,
            opacity:0,
            duration:2,
            scrollTrigger:{
                trigger:"#you", 
                scroller:'body',
                start:'top 10%',
                end:'top 50%',
                scrub:1.5
            }
        })
    })
  return (
    <div className='h-screen w-full overflow-hidden'>
      <div className='px-16'>
        <h1 id='miss' className='font-[two] text-2xl'>Don't Miss</h1>
        <div id='you' className='w-full mt-8 h-full flex items-center justify-center'>
            <img id='new' className='h-full w-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1946,c_limit/02d3a3ae-42e9-47c1-89bb-a438dae90757/nike-just-do-it.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Page8

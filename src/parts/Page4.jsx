import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page4 = () => {
    useGSAP(()=>{
        gsap.to('#kar .cont',{
            transform:"translateX(-300%)",
            scrollTrigger:{
                trigger:'#kar',
                scroller:'body',
                start:'top 10%',
                end:'top -100%',
                scrub:2,
                pin:true,

            }
        })
    })

  return (
    <div className='h-screen w-full bg-white '>
      <div className='px-15 h-full'>
        <h1 className='font-[two] text-2xl'>Shop by Collection</h1>
        <div id='kar' className='whitespace-nowrap overflow-x-hidden  h-[85vh] flex items-center mt-4 gap-6'>
            <div className='cont shrink-0 h-[80vh] w-[30%]  '>
                <div className='h-[90%] w-full'>
                    <img className='h-full w-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_544,c_limit/c8b941a4-a3b1-49e8-8e17-fdd36e966bd8/nike-just-do-it.png" alt="" />
                </div>
                <h1 className='mt-4 text-2xl font-[three]'>Running</h1>
            </div>
            <div className='cont shrink-0 h-[80vh] w-[30%]  '>
                <div className='h-[90%] w-full'>
                    <img className='h-full w-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_544,c_limit/6c08022a-95bc-4640-b473-7b1e49da88db/nike-just-do-it.png" alt="" />
                </div>
                <h1 className='mt-4 text-2xl font-[three]'>Lifestyle</h1>
            </div>
            <div className='cont shrink-0 h-[80vh] w-[30%]  '>
                <div className='h-[90%] w-full'>
                    <img className='h-full w-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_544,c_limit/8a48e750-868b-4513-b7a9-978192c83dcd/nike-just-do-it.png" alt="" />
                </div>
                <h1 className='mt-4 text-2xl font-[three]'>Trail Running</h1>
            </div>
            <div className='cont shrink-0 h-[80vh] w-[30%]  '>
                <div className='h-[90%] w-full'>
                    <img className='h-full w-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_544,c_limit/cd34cd98-9026-43c7-ab9a-9595591647aa/nike-just-do-it.png" alt="" />
                </div>
                <h1 className='mt-4 text-2xl font-[three]'>Football</h1>
            </div>
            <div className='cont shrink-0 h-[80vh] w-[30%]  '>
                <div className='h-[90%] w-full'>
                    <img className='h-full w-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_544,c_limit/75e56101-8626-4b52-b07a-3a0d6bc268fb/nike-just-do-it.png" alt="" />
                </div>
                <h1 className='mt-4 text-2xl font-[three]'>Training</h1>
            </div>
            <div className='cont shrink-0 h-[80vh] w-[30%]  '>
                <div className='h-[90%] w-full'>
                    <img className='h-full w-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_544,c_limit/b03a36e0-acc4-4640-81dd-98240cf6200e/nike-just-do-it.png" alt="" />
                </div>
                <h1 className='mt-4 text-2xl font-[three]'>Kids</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Page4

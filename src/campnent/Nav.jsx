import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { VscHeart } from 'react-icons/vsc'
import { TimeLine } from './timeline'

const Nav = () => {
  const logoRef = useRef();
  const menuRef =useRef([]);
  const srchRef =useRef();
  const mainRef =useRef();
  useGSAP(()=>{
    TimeLine.from(mainRef.current,{y:-300, opacity:0,duration:0.2})
    TimeLine.from(logoRef.current,{scale:0,duration:0.7,opacity:0})
    TimeLine.from(menuRef.current,{scale:0,duration:0.7,stagger:0.15})
    TimeLine.from(srchRef.current,{scale:0,duration:0.3})
    TimeLine.from('#like h1',{x:100,opacity:0,duration:0.3,stagger:0.2})
    

  })
  return (
    <div ref={mainRef} className=' relative w-full h-16 bg-white px-8 flex items-center justify-between'>
      <div className='w-[12%]'>
        <svg ref={logoRef} aria-hidden="true" className="swoosh-svg" focusable="false" viewBox="0 0 24 24" role="img" width="4.8rem" height="4.8rem" fill="none"><path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg>
      </div>
      <div className="flex items-center gap-5 text-md font-[four] tracking-tight">
        {['New & Featured', 'Men', 'Women', 'Kids', 'Sale', 'SNAKRS'].map((item, index) => (
          <h4 key={index} ref={(el) => (menuRef.current[index] = el)}>
            {item}
          </h4>
        ))}
      </div>
      <div className='flex items-center gap-5 w-[20%]'>
        <div ref={srchRef} className='bg-[#E5E5E5] flex items-center justify-start gap-2 text-lg px-3 font-[three] w-[75%] py-1 rounded-4xl'>
          < RxMagnifyingGlass />
          Search
        </div>
        <div id='like' className='flex items-center gap-3 text-2xl overflow-hidden'>
          <h1><VscHeart /></h1>
          <h1><IoBagHandleOutline /></h1>
        </div>
      </div>
    </div>
  )
}

export default Nav

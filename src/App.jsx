import React, { useEffect, useRef } from 'react'
import Smallnav from './parts/Smallnav'
import Nav from './campnent/Nav'
import Page1 from './parts/Page1'
import Page2 from './parts/Page2'
import Page3 from './parts/Page3'
import Page4 from './parts/Page4'
import Page5 from './parts/Page5'
import Page6 from './parts/Page6'
import Page7 from './parts/Page7'
import Page8 from './parts/Page8'



const App = () => {
  return (
    <div className=' relative h-full w-full'>
      < Smallnav/>
      <Nav />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
    </div>
  )
}

export default App

import React from 'react'
import Land from '../../sections/land/Land'
import Header from '../../components/header/Header'
import About from '../../sections/about/About'
import Numbers from '../../sections/numbers/Numbers'
// import Testmonials from '../../sections/testmonials/Testmonials'
import Slider from '../../sections/slider/Slider'
const Home = () => {
  return (
    <div>
      <Header/>
      <Land/>
      <Numbers/>
      <About/>
      {/* <Testmonials/> */}
      <Slider/>
    </div>
  )
}

export default Home

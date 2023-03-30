import './header.css'
import logo from '../../images/logo.png'
import { useState } from 'react'
const Header = () => {
  const [nav , setNav] = useState(false)
  const [shadow , setShadow] = useState(false)

  const AddShadow=()=>{
    if(window.scrollY>120){
      setShadow(true)
    }else{
      setShadow(false)
    }
  }

  window.addEventListener('scroll' ,AddShadow)

  return (
    <header className={shadow?'shadow':''}>
      <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className={nav?'show':''}>
        <li className="nav-li">
          <a href="#home">Home</a>
        </li>
        <li className="nav-li">
          <a href="#about">About Us</a>
        </li>
        <li className="nav-li">
          <a href="#explore">explore food</a>
        </li>
        <li className="nav-li">
          <a href="#reviews">Reviews</a>
        </li>
        <li className="nav-li">
          <a href="#faq">FAQ</a>
        </li>
      </nav>
      </div>
      <i className={'fa fa-bars'} onClick={()=>{setNav(!nav)}}></i>
    </header>
  )
}

export default Header

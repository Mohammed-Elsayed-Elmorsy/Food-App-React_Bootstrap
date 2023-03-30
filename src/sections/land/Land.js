import Btn from '../../components/button/Btn'
import './land.css'
const Land = () => {
  return (
    <div className='land'>
      <div className="container">
       <div className="land_wrapper">
       <h1>Good Food choices Are Investments</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Reprehenderit, optio!
         Lorem ipsum dolor sit amet.
         Lorem ipsum dolor sit.
       </p>
       <div className="btns">
       <Btn style children={<div>Order Now<i className='fa fa-shopping-basket'></i></div>}/>
       <Btn children={<div>Learn More<i className='fa fa-arrow-right'></i></div>}/>
       </div>
       </div>
        
      </div>
    </div>
  )
}

export default Land

import Testmonial from "./Testmonial";
import "./testmonials.css";
import img_1 from "../../images/1.jpg";
import img_2 from "../../images/1.png";
import img_3 from "../../images/2.png";
const Testmonials = () => {

  return (
    <div className='tesmonials mt-4 py-5 '>
      <div className='container'>
          <h2>Tesmonials</h2>
        <div className='testmonials_wrapper row'>
        <Testmonial
            info='lorem mo elsayed Front End developer'
            name='mohammed'
            img={img_1}
          />
          <Testmonial 
            info='erat tellus.Far far away, behind the word mount'
            name='elsayed'
            img={img_2}
          />
          <Testmonial 
            info='purus a odio finibus bibendum in sit amet leo. Ma'
            name='elmorsy'
            img={img_3}
          />
        </div>
        <nav>
          <li></li>
          <li></li>
          <li></li>
        </nav>
      </div>
    </div>
  );
};

export default Testmonials;

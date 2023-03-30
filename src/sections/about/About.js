import "./about.css";
import img from '../../images/01.jpg' 
import Btn from "../../components/button/Btn";
const About = () => {
  return (
    <div className='about'>
      <div className='container'> 
       <div className="about_wrapper row">
        <div className='right col-sm-12 col-lg-6 '>
          <img src={img} alt='img' />
        </div>
       <div className='left col-sm-12 col-lg-6 '>
          <h2>We make everything by hand with the best possible ingredients.</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <nav>
            <li>
                <i className="fa fa-check"></i>
                <span>
                Etiam sed dolor ac diam volutpat
                </span>
            </li>
            <li>
                <i className="fa fa-check"></i>
                <span>
                Etiam sed dolor ac diam volutpat
                </span>
            </li>
            <li>
                <i className="fa fa-check"></i>
                <span>
                Etiam sed dolor ac diam volutpat
                </span>
            </li>
          </nav>
          <Btn style children={'Learn More '}/>
        </div>
       </div>
      </div>
    </div>
  );
};

export default About;

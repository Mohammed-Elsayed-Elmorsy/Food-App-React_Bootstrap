import React from "react";

const Testmonial = (props) => {
  return (
    <div className='tesmonial col-sm-12 col-md-6 col-lg-4 text-center'>
      <div className='testmonial_wrapper'>
        <img src={props.img} alt='img' />
        <p>
         {props.info}
        </p>
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default Testmonial;

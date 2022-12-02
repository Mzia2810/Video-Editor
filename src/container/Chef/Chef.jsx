import React, { useEffect } from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Chef = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="app__bg  section__padding container-fluid " id="about">
      <h2 className="mt-5 mb-2 aboutheading col-md-2 mx-auto">About US</h2>
      <hr className="col-md-1 mx-auto " />
      <div className="row  col-md-8 mx-auto py-2 my-5">
        <div
          className="imgContainer col-md-6 "
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img src={images.chef} alt="chef" />
          <h2 className="ceoName">
            Slaman Khan <span className="ceofounderspan">(CEO & Founder)</span>
          </h2>
        </div>
        <div
          className="textContainer col-md-6 "
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h1 className="headtext__cormorant">What we believe in</h1>
          <p className="infopara ms-3">
            We believe that every idea can be a creation of something. We listen
            to our clients ideas and help them acheive the idea into reality.
          </p>

          <img src={images.sign} alt="sign" className="signature py-1" />
          <p className="pt-1">signature</p>
        </div>
      </div>
    </div>
  );
};

export default Chef;

// <div className="app__wrapper_img app__wrapper_img-reverse">
{
  /* <img src={images.chef} alt="chef" />
</div>

<div className="app__wrapper_info">
   <SubHeading title="Words from Founder of the company" />
   <h1 className="headtext__cormorant">What we believe in</h1>

   <div className="app__chef-content">
     <div className="app__chef-content_quote">
       <img src={images.quote} alt="quote" />
       <p className="p__opensans">We believe that every idea can be a creation of something.</p>
     </div>
     <p className="p__opensans">We listen to our clients ideas and help them acheive the idea into reality.</p>
   </div>

   <div className="app__chef-sign">
     <p>Sultan Khan</p>
     <p className="p__opensans">Founder & CEO</p>
     <img src={images.sign} alt="sign" />
   </div> */
}

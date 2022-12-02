import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact"> 
    <div className="app__wrapper_info">
    <SubHeading title="Contact" />
    <h1 className="headtext__cormorant" style={{ marginBottom: '3%' }}>Find Us</h1>
    <div className="app__wrapper-content">
      <p className="p__opensans">Lane Ends Bungalow</p>
      <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2% 0', }}>Opening Hours</p>
      <p className="p__opensans">Mon - Fri: 10:00 - 16:00</p>
      <p className="p__opensans">Sat - Sun: 10:00 - 16:00</p>
    </div>
    </div>
    <button className="custom__button" style={{ marginTop: '2%'}}>Visit Us</button>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;

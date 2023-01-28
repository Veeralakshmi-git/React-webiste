import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's World" />
      <h1 className="headtext__cormorant">What we beleive in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit voluptates quam.</p>
        </div>
        <p className='p__opensans'>Harum quasi ipsam voluptates quam corrupti nobis, voluptas asperiores mollitia hic repellendus inventore. Laborum excepturi incidunt veniam vitae illo temporibus recusandae aut.</p>
      </div>

      <div className="app__chef-sign">
         <p>Kevin Luo</p>
         <p className="p__opensans">chef & founder</p>
         <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;

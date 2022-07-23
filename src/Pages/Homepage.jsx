import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import scorll from '../Images/Scorll.png'
import scroll2 from '../Images/Scroll2.png'
import scroll3 from '../Images/Scroll3.png';
import scroll4 from '../Images/Scroll4.png';
import '../Pages/Homepage.css'

const fadeImages = [
  {
     url:scorll ,
  },
  {
      url:scroll2,
   
  },
  {
     url:scroll3,
  },
  ,
  {
     url:scroll4,
  },
];

function Homepage() {
  return (
    <div>
    <div className="slide-container">
    <Fade>
      {fadeImages.map((fadeImage, index) => (
        <div className="each-fade" key={index}>
          <div className="image-container">
            <img src={fadeImage.url} />
          </div>
          <h2>{fadeImage.caption}</h2>
        </div>
      ))}
    </Fade>
  </div>

    </div>
  )
}

export default Homepage
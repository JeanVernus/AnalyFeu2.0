import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import Analyfeu from '../Assets/image1Caroussel.png';
import Audit from '../Assets/image2AuditCaroussel.jpg';
import Expertise from '../Assets/image3ExpertiseCaroussel.jpg';
import Conseils from '../Assets/image4ConseilCaroussel.jpg';
import Formations from '../Assets/image5FormationCaroussel.jpg';
import Vous from '../Assets/image6VousCaroussel.jpg';
import '../CSS/Caroussel.css';

class Caroussel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image1: Analyfeu,
      image2: Audit,
      image3: Expertise,
      image4: Conseils,
      image5: Formations,
      image6: Vous
    }
  }
  
  Slideshow = () => {
    const { image1, image2, image3, image4, image5, image6 } = this.state;
    
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
    }
      return (
        <Fade {...properties} className="fade">
          <div className="each-fade">
            <div className="image-container">
              <img className="displayImg"src={image1} alt="" width="1000px" height="500px"/>
            </div>
            <h2>AnalyFeu... </h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className="displayImg" src={image2} alt="" width="1000px" height="500px"/>
            </div>
            <h2>Audit</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className="displayImg" src={image3} alt="" width="1000px" height="500px"/>
            </div>
            <h2>Expertise</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className="displayImg" src={image4} alt="" width="1000px" height="500px"/>
            </div>
            <h2>Conseils</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className="displayImg" src={image5} alt="" width="1000px" height="500px"/>
            </div>
            <h2>Formations</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className="displayImg" src={image6} alt="" width="1000px" height="500px"/>
            </div>
            <h2>... pour vous!</h2>
          </div>
        </Fade>
      )
    }

  render() {
    return (
      <div>
        {this.Slideshow()}
      </div>
    )
  };
}

export default Caroussel;
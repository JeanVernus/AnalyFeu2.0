import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Analyfeu from '../Assets/image1Caroussel.png';
import Audit from '../Assets/image2AuditCaroussel.jpg';
import Expertise from '../Assets/image3ExpertiseCaroussel.jpg';
import Conseils from '../Assets/image4ConseilCaroussel.jpg';
import Formations from '../Assets/image5FormationCaroussel.jpg';
import Vous from '../Assets/image6VousCaroussel.jpg';
import MinAnalyfeu from '../Assets/minimage1Caroussel.png';
import MinAudit from '../Assets/minimage2AuditCaroussel.jpg';
import MinExpertise from '../Assets/minimage3ExpertiseCaroussel.jpg';
import MinConseils from '../Assets/minimage4ConseilCaroussel.jpg';
import MinFormations from '../Assets/minimage5FormationCaroussel.jpg';
import MinVous from '../Assets/minimage6VousCaroussel.jpg';
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
      image6: Vous,
      minimage1: MinAnalyfeu,
      minimage2: MinAudit,
      minimage3: MinExpertise,
      minimage4: MinConseils,
      minimage5: MinFormations,
      minimage6: MinVous

    }
  }

  slideShow() {

    const { image1, image2, image3, image4, image5, image6, minimage1, minimage2, minimage3, minimage4, minimage5, minimage6 } = this.state;
    const images = [
      {
        original:  image1 ,
        thumbnail: minimage1
      },
      {
        original:  image2 ,
        thumbnail: minimage2
      },
      {
        original:  image3 ,
        thumbnail: minimage3
      },
      {
        original:  image4 ,
        thumbnail: minimage4
      },  
      {
        original:  image5 ,
        thumbnail: minimage5
      },
      {
        original:  image6 ,
        thumbnail: minimage6
      },
    ]
    return (
      <div className="displayCaroussel"><ImageGallery items={images} /></div>
    );
  }

  render() {
    return (
      <div>{this.slideShow()}</div>
    )
  }
}

export default Caroussel;

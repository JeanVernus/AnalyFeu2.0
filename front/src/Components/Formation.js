import React, { Component } from "react";
import { LightSpeed, Fade, Bounce, Zoom } from 'react-reveal';
import Logo1 from '../Assets/logoFormation2.png';
import Logo2 from '../Assets/logoFormation3.jpeg';
import Logo3 from '../Assets/logoFormation.png';
import '../CSS/Formation.css'

class Formation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="paddingFormationGlobal">
        <br />
        <Bounce top cascade>
          <div className="titleBoxFormation"><br /><br />
            <h1 className="titleFormation">Formations</h1><span><Bounce top ><h3 className="subLineFormation"> incendie - secourisme</h3></Bounce></span><br /><br /><br /><br />
            <p className="pFormation">
              Parce-que la sécurité s'apprend toute entreprise ne doit pas subir, comme une fatalité, les risques inhérents a son activité.
              C'est pourquoi notre département de formation a pour vocation de vous apporter des compétences pour prévenir ou faire face efficacement à une situation d'urgence.
            </p><br /><br />
          </div>
        </Bounce>
        <h3 className="subLineFormation">Nous vous proposons pour votre sécurité ....</h3>
        <div className="displayFormation">
          <LightSpeed left>
            <div className="marginFormation">
              <h1 className="subTitleFormation">Maîtrise & pédagodie</h1>
              <Fade><img className="displayImgForm" src={Logo1} alt="" width="250px" height="250px" /></Fade>
              <ul>
                <Bounce right cascade>
                  <li>Une équipe compétente, professionnelle et efficace.</li>
                  <li>Des formateurs expérimentés et spécialisés dans leurs domaines d’intervention.</li>
                  <li>Des formations adaptées aux spécificités et besoins de l’entreprise.</li>
                  <li>Des moyens pédagogiques didactiques (vidéo, exercices interactifs...)</li>
                  <li>Des formations conviviales, vivantes, claires et compréhensibles par tous !</li>
                  <li>Des formations à la carte</li>
                  <li>Nous apportons nos compétences</li>
                  <li>Vous apportez  vos exigences</li>
                  <li>Nous personnalisons vos formations</li>
                </Bounce>
              </ul>
            </div>
          </LightSpeed>
          <Bounce top>
            <img className="displayImgFormCenter" src={Logo3} alt="" width="250px" height="250px" />
          </Bounce>
          <LightSpeed right>
            <div className="marginFormation1">
              <h1 className="subTitleFormation">Un catalogue complet</h1>
              <Fade><img className="displayImgForm" src={Logo2} alt="" width="250px" height="250px" /></Fade>
              <ul>
                <Bounce left cascade>
                  <li>Sensibilisation aux risques incendie</li>
                  <li>Formation équipier de 1ère intervention</li>
                  <li>Equipier de seconde Intervention</li>
                  <li>Sauveteur secouriste du travail</li>
                  <li>Formation gestes et postures</li>
                  <li>Formation « permis Feu »</li>
                  <li>Formation évacuation</li>
                  <li>Habilitation électrique HOBOV…</li>
                  <li>Maniement extincteur</li>
                  <li>Formation accidents domestiques</li>
                </Bounce>
              </ul>
            </div>
          </LightSpeed>
        </div><br /><br /><br />
        <h6 className="subLineFormation"> (incendie - hygiène sécurité - secourisme)</h6>
        <a href="./catalogue"><h3 className="subLineFormation"> Télécharger le catalogue de formation </h3></a>
        <Zoom><h1 className="Formation1">Formations</h1></Zoom><span><Zoom><h3 className="Formation2"> incendie - secourisme</h3></Zoom></span><br /><br />
      </div>
    );
  }
}

export default Formation;

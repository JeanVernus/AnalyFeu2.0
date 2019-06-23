import React, { Component } from 'react';
import { LightSpeed, Fade, Bounce, Zoom } from 'react-reveal';
import Logo1 from '../Assets/logoIncendie1.jpg';
import Logo2 from '../Assets/logoIncendie2.jpg';
import Logo3 from '../Assets/logoIncendie3.png';
import Logo4 from '../Assets/logoIncendie4.jpg';
import '../CSS/Bureau.css'

class BureauSSI extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="paddingBureauGlobal">
        <br />
        <Bounce top cascade>
          <div className="titleBoxBureau">
            <h1 className="titleBureau">Bureau d'étude/ Coordination SSI</h1>
            <h5 className="subLineBureau">Nous vous accompagnons dans tous vos projets de construction, d’aménagement, de transformation et de mise en sécurité.</h5>
            <p className="pBureau">
              La réglementation concernant la sécurité incendie est dense, drastique et complexe, une mauvaise interprétation peut être lourde de conséquences. L’analyse des textes, l’adaptation des règles de sécurité, la bonne intégration des textes dans un projet sont des exercices qui demandent une expérience et des compétences avérées. Notre bureau d'étude est spéciapsé dans la réglementation incendie il est au service des maîtres d'ouvrages, des maîtres d'oeuvres, des propriétaires et exploitants qu'ils soient pubpc ou privé.
              Les analyses, les solutions et propositions qui découlent de nos études présentent pour nos cpents une forte valeur ajoutée.
              Les textes réglementaires y sont integrés de façon réapste et raisonnable, le niveau de sécurité recherché est atteint, vos intérêts sont défendus et le budget est respecté.
        </p>
          </div><br /><br />
        </Bounce>
        <div className="boxBureau">
          <h1 className="titlePrez" >----------------ANALYFEU: Nos mission et nos compétences----------------</h1><br /><br /><br /><br />
          <Bounce left>
            <div className="displayBureau1">
              <ul>
                <h3 className="subTitleBureau">Nos missions</h3>
                <Fade><img className="bureauImg1"src={Logo1} alt="" height="250px" /></Fade>
                <LightSpeed left>
                  <h5>Audit/conseil</h5>
                  <h5>Assistance maître d’ouvrages</h5>
                  <h5>Défense de vos droits et de vos interêts</h5>
                  <h5>Mandat de sécurité</h5>
                  <h5>Coordination SSI</h5>
                  <h5>>Elaboration des documents : notice de sécurité, diagnostic etc…</h5>
                </LightSpeed>
              </ul>
              <div className="marginBureau">
                <ul>
                  <h3 className="subTitleBureau">Nos compétences</h3>
                  <Fade><img className="bureauImg2" src={Logo2} alt="" height="250px" /><br /><br /><br /></Fade>
                  <LightSpeed right>
                    <h5>Des experts préventionnistes, issus des corps officiels de secours</h5>
                    <h5>Certifiés et diplômés en prévention, agrées CNPP, coordinateurs SSI</h5>
                  </LightSpeed>
                </ul>
              </div>
            </div><br /><br /><br />
          </Bounce>
          <h1 className="titlePrez" >--------------ANALYFEU: Nos garanties et nos savoir-faires--------------</h1><br /><br /><br /><br /><br />
          <Bounce right>
            <div className="displayBureau2">
              <ul>
                <h3 className="subTitleBureau">Nos garanties</h3>
                <Fade ><img src={Logo3} alt="" height="250px" /></Fade>
                <LightSpeed left>
                  <h5>La réactivité</h5>
                  <h5>Des réponses rapides</h5>
                  <h5>Des coûts réduits</h5>
                  <h5>Un engagement pour vos intérêts</h5>
                  <h5>Une relation de partenariat</h5>
                  <h5>>Une équipe à vos cotés</h5>
                </LightSpeed>
              </ul>
              <div className="marginBureau">
                <ul>
                  <h3 className="subTitleBureau">Nos connaissances et savoir-faire</h3>
                  <Fade ><img className="bureauImg2" src={Logo4} alt="" height="250px" /><br /><br /><br /></Fade>
                  <LightSpeed right>
                    <h5>Une veille réglementaire soutenue</h5>
                    <h5>Groupes de travail avec lesacteurs de la prévention</h5>
                    <h5>Une bibpothèque  régupèrement mise à jour</h5>
                  </LightSpeed>
                </ul>
              </div>
            </div>
          </Bounce>
        </div><br /><br /><br />

        <h5 className="subLineBureau">AnalyFeu vous offre ses compétences, son savoir-faire pour vous épauler et trouver des solutions rationnelles</h5><br /><br /><br />

        <Zoom><h1 className="Conseil">Conseils</h1><br /><br /><br /></Zoom>

      </div >

    );
  }
}

export default BureauSSI;
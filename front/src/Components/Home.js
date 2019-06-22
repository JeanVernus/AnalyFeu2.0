import React, { Component } from "react";
import prezHome from '../Assets/prezHome.jpg';
import formationHome from '../Assets/formationHome.jpg';
import conseilHome from '../Assets/conseilHome.jpeg';
import { Bounce, Fade } from 'react-reveal';
import Caroussel from './Caroussel';
import imageEnd from '../Assets/imageEnd.jpeg'
import '../CSS/Home.css';


class Home extends Component {

    render() {
        return (
            <div>
                <div className="homePosition" >
                    <h1 className="titlePrez" >------------ANALYFEU: Audits, conseils, expertise et Formations------------</h1><br /><br /><br />
                    <div className="blockHomePosition">
                        <div className="blockHome">
                            <h3 className="titlePrez">Présentation</h3><br />
                            <Fade><img className="borderImg" src={prezHome} alt="" width="350px" height="500px" /></Fade>
                            <h4>
                                <Bounce left >
                                    L’incendie et les accidents professionnels sont des sujets très préoccupants et d’actualité permanente.
                                    Pour prévenir ces faits divers, lourds sur le plan humain et économique, des lois et des textes réglementaires
                                    dictent les mesures à appliquer pour construire, aménager, exploiter un établissement quelle que soit sa
                                    destination. Cette réglementation est variée, complexe et difficile à appréhender. Notre bureau d’études en
                                    incendie a ainsi été crée pour accompagner les exploitants, constructeurs, et propriétaires dans leurs projets,
                                    leurs obligations pour que la réglementation qui leur est opposable soit appliquée de facon rationnelle et raisonnable.
                                    A cette activité, nous avons associé la formation aux métiers de la sécurité de sorte à répondre présent aux attentes de chacun.
                        </Bounce>
                            </h4>
                            <h4>
                                <Bounce right >
                                    L’incendie et les accidents professionnels sont des sujets très préoccupants et d’actualité permanente.
                                    Pour prévenir ces faits divers, lourds sur le plan humain et économique, des lois et des textes réglementaires
                                    dictent les mesures à appliquer pour construire, aménager, exploiter un établissement quelle que soit sa
                                    destination. Cette réglementation est variée, complexe et difficile à appréhender. Notre bureau d’études en
                                    incendie a ainsi été crée pour accompagner les exploitants, constructeurs, et propriétaires dans leurs projets,
                                    leurs obligations pour que la réglementation qui leur est opposable soit appliquée de facon rationnelle et raisonnable.
                                    A cette activité, nous avons associé la formation aux métiers de la sécurité de sorte à répondre présent aux attentes de chacun.
                        </Bounce>
                            </h4>
                        </div>
                        <div className="blockHome">
                            <h3 className="titlePrez">Formations</h3><br />
                            <Fade><img className="borderImg" src={formationHome} alt="" width="350px" height="500px" /></Fade>
                            <h4>
                                <Bounce left >
                                    L’incendie et les accidents professionnels sont des sujets très préoccupants et d’actualité permanente.
                                    Pour prévenir ces faits divers, lourds sur le plan humain et économique, des lois et des textes réglementaires
                                    dictent les mesures à appliquer pour construire, aménager, exploiter un établissement quelle que soit sa
                                    destination. Cette réglementation est variée, complexe et difficile à appréhender. Notre bureau d’études en
                                    incendie a ainsi été crée pour accompagner les exploitants, constructeurs, et propriétaires dans leurs projets,
                                    leurs obligations pour que la réglementation qui leur est opposable soit appliquée de facon rationnelle et raisonnable.
                                    A cette activité, nous avons associé la formation aux métiers de la sécurité de sorte à répondre présent aux attentes de chacun.
                        </Bounce>
                            </h4>
                            <h4>
                                <Bounce right >
                                    L’incendie et les accidents professionnels sont des sujets très préoccupants et d’actualité permanente.
                                    Pour prévenir ces faits divers, lourds sur le plan humain et économique, des lois et des textes réglementaires
                                    dictent les mesures à appliquer pour construire, aménager, exploiter un établissement quelle que soit sa
                                    destination. Cette réglementation est variée, complexe et difficile à appréhender. Notre bureau d’études en
                                    incendie a ainsi été crée pour accompagner les exploitants, constructeurs, et propriétaires dans leurs projets,
                                    leurs obligations pour que la réglementation qui leur est opposable soit appliquée de facon rationnelle et raisonnable.
                                    A cette activité, nous avons associé la formation aux métiers de la sécurité de sorte à répondre présent aux attentes de chacun.
                        </Bounce>
                            </h4>
                        </div>
                        <div className="blockHome">
                            <h3 className="titlePrez">Conseils</h3><br />

                            <Fade><img className="borderImg" src={conseilHome} alt="" width="350px" height="500px" /></Fade>
                            <h4>
                                <Bounce left >
                                    L’incendie et les accidents professionnels sont des sujets très préoccupants et d’actualité permanente.
                                    Pour prévenir ces faits divers, lourds sur le plan humain et économique, des lois et des textes réglementaires
                                    dictent les mesures à appliquer pour construire, aménager, exploiter un établissement quelle que soit sa
                                    destination. Cette réglementation est variée, complexe et difficile à appréhender. Notre bureau d’études en
                                    incendie a ainsi été crée pour accompagner les exploitants, constructeurs, et propriétaires dans leurs projets,
                                    leurs obligations pour que la réglementation qui leur est opposable soit appliquée de facon rationnelle et raisonnable.
                                    A cette activité, nous avons associé la formation aux métiers de la sécurité de sorte à répondre présent aux attentes de chacun.
                        </Bounce>
                            </h4>
                            <h4>
                                <Bounce right >
                                    L’incendie et les accidents professionnels sont des sujets très préoccupants et d’actualité permanente.
                                    Pour prévenir ces faits divers, lourds sur le plan humain et économique, des lois et des textes réglementaires
                                    dictent les mesures à appliquer pour construire, aménager, exploiter un établissement quelle que soit sa
                                    destination. Cette réglementation est variée, complexe et difficile à appréhender. Notre bureau d’études en
                                    incendie a ainsi été crée pour accompagner les exploitants, constructeurs, et propriétaires dans leurs projets,
                                    leurs obligations pour que la réglementation qui leur est opposable soit appliquée de facon rationnelle et raisonnable.
                                    A cette activité, nous avons associé la formation aux métiers de la sécurité de sorte à répondre présent aux attentes de chacun.
                        </Bounce>
                            </h4>
                        </div>
                    </div>
                </div>
                <h1 className="titlePrez" >----------------ANALYFEU: Expertise et conseils pour vous!----------------</h1><br /><br /><br />
                <Caroussel /><br /><br />
                <h1 className="titlePrez" >------------------------ANALYFEU: Notre philosophie------------------------</h1><br /><br /><br />
                <dvi>
                    <figure>
                        <img src={imageEnd} alt="" />
                        <figcaption>
                            <h2>
                                L’incendie et les accidents professionnels sont des sujets très préoccupants et d’actualité permanente.
                                Pour prévenir ces faits divers, lourds sur le plan humain et économique, des lois et des textes réglementaires
                                dictent les mesures à appliquer pour construire, aménager, exploiter un établissement quelle que soit sa
                                destination. Cette réglementation est variée, complexe et difficile à appréhender. Notre bureau d’études en
                                incendie a ainsi été crée pour accompagner les exploitants, constructeurs, et propriétaires dans leurs projets,
                                leurs obligations pour que la réglementation qui leur est opposable soit appliquée de facon rationnelle et raisonnable.
                                A cette activité, nous avons associé la formation aux métiers de la sécurité de sorte à répondre présent aux attentes 
                                de chacun.L’incendie et les accidents professionnels sont des sujets très préoccupants et d’actualité permanente.
                                Pour prévenir ces faits divers, lourds sur le plan humain et économique, des lois et des textes réglementaires
                                dictent les mesures à appliquer pour construire, aménager, exploiter un établissement quelle que soit sa
                                destination. Cette réglementation est variée, complexe et difficile à appréhender. Notre bureau d’études en
                                incendie a ainsi été crée pour accompagner les exploitants, constructeurs, et propriétaires dans leurs projets,
                                leurs obligations pour que la réglementation qui leur est opposable soit appliquée de facon rationnelle et raisonnable.
                                A cette activité, nous avons associé la formation aux métiers de la sécurité de sorte à répondre présent aux attentes de chacun.
                            </h2>
                        </figcaption>
                    </figure>
                </dvi>
            </div>
        );
    }

}
export default Home;

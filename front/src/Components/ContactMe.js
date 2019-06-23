import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Bounce, Zoom, LightSpeed } from 'react-reveal';
import Axios from 'axios';
import Noty from 'noty';
import '../CSS/Contact.css';

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      subject: "",
      company: "",
      text: "",
      email: "",
      job: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  handleChange(event, key) {
    console.log(this.state);
    this.setState({ [(event.target.name)]: event.target.value });
    if (key === 'firstName') { this.setState({ firstName: event.target.value }) };
    if (key === 'lastName') { this.setState({ lastName: event.target.value }) };
    if (key === 'company') { this.setState({ company: event.target.value }) };
    if (key === 'text') { this.setState({ Text: event.target.value }) };
    if (key === 'email') { this.setState({ email: event.target.value }) };
    if (key === 'subject') { this.setState({ email: event.target.value }) };
    if (key === 'job') { this.setState({ email: event.target.value }) };
  }

  sendForm(event) {
    const { firstName, lastName, company, text, email, subject, job } = this.state;
    event.preventDefault();
    Axios.post('http://localhost:5000/sendForm', {
      firstName,
      lastName,
      company,
      text,
      email,
      subject,
      job
    })
      .then(res => {
        if (res.data === 'send') {
          new Noty({
            text: 'Information enregistrées',
            type: 'success',
            theme: 'sunset',
            timeout: 2000,
          }).show();
        }
      })
      .catch(err => {
        new Noty({
          text: 'Un problème est survenue',
          type: 'error',
          theme: 'sunset',
          timeout: 2000,
        }).show();
      });
  }

  render() {
    return (
      <div className="paddingBox">
        <div className="boxReference">
          <Bounce top cascade>
            <div className="marginBox">
              <h1 className="titleContact" >Référencements</h1>
              <h2 className="paraContact">
                Notre company, pour ce qui concerne son Centre de Formation ou son bureau
            d’études<h4></h4>en prévention incendie, est au service de cpents de relastName.
                                  Ils nous font confiance :
        </h2><br /><br />
              <p>Hôpital miptaire inter armée de Laveran (Marseille)</p>
              <p>Hôpital San Salvadour (APHP) (Hyères)</p>
              <p>Universités de Provence & université Paul Cézanne</p>
              <ul>
                <p>- Faculté Saint Jérôme - Marseille</p>
                <p>- Faculté Saint Charles - Marseille</p>
                <p>- Site d’Unimeca et Polytec - Château Gombert</p>
                <p>- Faculté de Lettres Schuman - Aix-en-Provence</p>
                <p>- Faculté de Droit - Marseille</p>
                <p>- Faculté de Droit d’Aix-en-Provence</p>
                <p>- IUT de Saint Jérôme</p>
                <p>- Institut d’Administration d’Entreprises - Puyricard</p>
                <p>- Espace Poncet - Aix-en-Provence</p>
                <p>- Et d’autres sites…….</p>
              </ul>
              <p>Université pierre Mendes France (IUT 2 Grenoble)</p>
              <p>Université d’Avignon et Pays de Vaucluse (Faculté St Marthe)</p>
              <p>company AMO</p>
            </div>
          </Bounce>
          <div className="boxContact"><br /><br />
            <LightSpeed left> <h1 className="titleContact" >Me contacter</h1><br /></LightSpeed>
            <div>
              <LightSpeed rigth>
                <Form className="form" inverted onSubmit={this.sendForm}>
                  <Form.Group widths='equal'>
                    <Form.Input name="firstName" placeholder='Prénom' onChange={event => this.handleChange(event, "firstName")} />
                    <Form.Input name="lastName" placeholder='Nom' onChange={event => this.handleChange(event, "lastName")} />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input name="job" placeholder='Poste' onChange={event => this.handleChange(event, "job")} />
                    <Form.Input name="company" placeholder='Société' onChange={event => this.handleChange(event, "company")} />
                    <Form.Input name="email" placeholder='Adresse Email' onChange={event => this.handleChange(event, "email")} />
                  </Form.Group>
                  <Form.Input name="subject" placeholder='Sujet' onChange={event => this.handleChange(event, "subject")} />
                  <Form.TextArea label='Exprimez vous' name="text" onChange={event => this.handleChange(event, "text")} />
                  <Button type='submit'>Soumettre</Button>
                </Form><br /><br /><br /><br />
              </LightSpeed>
            </div>
          </div>
        </div>
        <Zoom><h1 className="Contact">Contact</h1></Zoom>
      </div>
    );
  }
}

export default ContactMe;


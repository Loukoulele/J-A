import React, { Component } from 'react'
import SectionTitle from '../../components/SectionTitle'


import vec1 from '../../images/contact/1.png'
import vec2 from '../../images/contact/2.png'

import emailjs from "emailjs-com";

class RSVP extends Component {

    state = {
        name: '',
        first: '',
        email: '',
        guest: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            first,
            email,
            guest, error } = this.state;

        if (name === '') {
            error.name = "Veuillez entrer votre nom";
        }
        if (first === '') {
            error.email = "Veuillez entrer votre prénom";
        }
        if (email === '') {
            error.email = "Veuillez entrer votre email";
        }
        if (guest === '') {
            error.guest = "Veuillez sélectionner le nombre de personnes présentes";
        }

        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.first === '' && error.email === '' && error.guest === '') {
            this.setState({
                name: '',
                first: '',
                email: '',
                guest: '',
                error: {}
            })
        }
        if (name != '' && first != '' && email != '' && guest != '') {
            emailjs.sendForm('service_3v5yfyc', 'template_evji6kp', e.target, '2m1mZVuUouFpFifj_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });
            e.target.reset()
        }
    }

    render(){
        const { name,
            first,
            email,
            guest,
            error } = this.state;

        return(
            <section className={`wpo-contact-section ${this.props.pt}`} id="RSVP">
                <div className="container">
                    <div className="wpo-contact-section-wrapper">
                        <div className="wpo-contact-form-area">
                            <SectionTitle MainTitle={'Serez-vous présent ?'}/>
                            <form onSubmit={this.subimtHandler} className="form">
                                <div className="row">
                                    <div>
                                        <div className="form-field">
                                            <input value={name} onChange={this.changeHandler} className="form-control" type="text" name="name" placeholder="Nom"/>
                                            <p>{error.name ? error.name : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-field">
                                            <input value={first} onChange={this.changeHandler} className="form-control" type="text" name="first" placeholder="Prénom"/>
                                            <p>{error.name ? error.name : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-field">
                                            <input onChange={this.changeHandler} value={email} type="email" className="form-control" name="email" placeholder="Email"/>
                                            <p>{error.email ? error.email : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <select name="guest" className="form-control" value={guest} onChange={this.changeHandler}>
                                            <option>Nombre d'invités</option>
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                            <option>05</option>
                                        </select>
                                        <p>{error.guest ? error.guest : ''}</p>
                                    </div>
                                    <div className="submit-area">
                                        <div className="form-submit">
                                            <button type="submit" className="theme-btn-s3">Réserver</button>
                                        </div>
                                        <p>{error.success ? error.success : ''}</p>
                                    </div>
                                </div>
                            </form>
                            <div className="border-style"></div>
                        </div>
                        <div className="vector-1">
                            <img src={vec1} alt=""/>
                        </div>
                        <div className="vector-2">
                            <img src={vec2} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default  RSVP;
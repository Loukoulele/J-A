import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import coupleImg1 from '../../images/couple/1.jpg'
 
class CoupleSection extends Component {

    render() {
        return(
            <section className="couple-section section-padding" id="couple">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-xs-12">
                            <div className="couple-area clearfix">
                                <div className="text-grid bride">
                                    <h3><b>J</b>ulie <b>C</b>hemla</h3>
                                    <p>Juste la femme idéale pour Avner 
                                        Un brin fofolle
                                        Limite relou
                                        Indubitablement fan de sa belle mère 
                                        Extrêmement bonne cuisinière (sponsorisée par UberEat)
                                    </p>
                                    {/* <div className="social">
                                        <ul>
                                            <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                                <div className="middle-couple-pic">
                                    <div className="middle-couple-pic-inner">
                                        <img src={coupleImg1} alt=""/>
                                    </div>
                                </div>
                                <div className="text-grid groom">
                                    <h3><b>A</b>vner <b>S</b>ayagh</h3>
                                    <p>Assurément le mari idéal pour Julie
                                        Vraiment très têtu
                                        Naturellement drôle
                                        Extrêmement fan de son beau-père
                                        Rassurant dans n’importe quelle situation (sauf au volant)
                                    </p>
                                    {/* <div className="social">
                                        <ul>
                                            <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}
 
export default CoupleSection;
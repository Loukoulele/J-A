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
                                <div className="text-grid groom">
                                    <h3>Julie Chemla</h3>
                                    <p>
                                        <b>J</b>uste la femme idéale pour Avner<br/>
                                        <b>U</b>n brin fofolle<br/>
                                        <b>L</b>imite relou<br/>
                                        <b>I</b>ndubitablement fan de sa belle-mère<br/>
                                        <b>E</b>xtrêmement bonne cuisinière (sponsorisée par UberEat)
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
                                    <h3>Avner Sayagh</h3>
                                    <p>
                                        <b>A</b>ssurément le mari idéal pour Julie<br/>
                                        <b>V</b>raiment très têtu<br/>
                                        <b>N</b>aturellement drôle<br/>
                                        <b>E</b>xtrêmement fan de son beau-père<br/>
                                        <b>R</b>assurant dans n’importe quelle situation (sauf au volant)
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
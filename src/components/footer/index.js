import React from 'react'
import {Link}  from 'react-router-dom'
import Projects from '../../api/projects'


const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Link onClick={ClickHandler} className="logo" to="/">Jul<span>i<i className="fa fa-heart" aria-hidden="true"></i></span>e & Avner</Link>
                            </div>
                            {/* <p></p> */}
                            {/* <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    {/* <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Information</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="home">Accueil</Link></li>
                                <li><Link onClick={ClickHandler} to="couple">Couple</Link></li>
                                <li><Link onClick={ClickHandler} to="story">Notre histoire</Link></li>
                                <li><Link onClick={ClickHandler} to="gallery">Gallerie</Link></li>
                                <li><Link onClick={ClickHandler} to="RSVP">Contact</Link></li>
                                <li><Link onClick={ClickHandler} to="events">Événements</Link></li>
                            </ul>
                        </div>
                    </div> */}
                    
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <p>Si vous avez des questions, n'hésitez pas à nous contacter.</p>
                                <ul>
                                    <li><i className="fi flaticon-email"></i>chemla.julie5@gmail.com</li>
                                    <li><i className="fi flaticon-phone-call"></i>+33 6 22 32 47 90</li>
                                    <li><i className="fi flaticon-email"></i>avner.sayagh@gmail.com</li>
                                    <li><i className="fi flaticon-phone-call"></i>+33 6 21 53 98 13</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget instagram">
                            <div className="widget-title">
                                <h3>Instagram</h3>
                            </div>
                            <ul className="d-flex">
                                {Projects.slice(0,6).map((project, pitem) => (
                                    <li key={pitem}><Link onClick={ClickHandler} to={`/project-single/${project.id}`}><img src={project.pimg1} alt=""/></Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> &copy; 2023 Switech. Design By <Link onClick={ClickHandler} to="/">I.B</Link>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;
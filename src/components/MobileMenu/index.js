import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link} from 'react-scroll'
import {NavLink} from 'react-router-dom'
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Accueil',
        link: '/home',
    },
      
]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    <div className="menu-close">
                         <div className="clox" onClick={this.menuHandler}><i className="ti-close"></i></div>
                    </div>

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <NavLink onClick={ClickHandler} to={item.link}>{item.title}</NavLink>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><NavLink onClick={ClickHandler} className="active" to={submenu.link}>{submenu.title}</NavLink></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                        <li><Link activeClass="active" to="couple" spy={true} smooth={true} offset={-100}  duration={500} >J & A</Link></li>
                        <li><Link activeClass="active" to="gallery" spy={true} smooth={true}  duration={500} >Galerie</Link></li>
                        <li><Link activeClass="active" to="story" spy={true} smooth={true}  duration={500} >L'??v??nement</Link></li>
                        <li><Link activeClass="active" to="events" spy={true} smooth={true} offset={-80}  duration={500} >Lieux et dates</Link></li>
                        <li><Link activeClass="active" to="RSVP" spy={true} smooth={true}  duration={500} >Contact</Link></li>
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}>
                    <button type="button" className="navbar-toggler open-btn">
                            <span className="icon-bar first-angle"></span>
                            <span className="icon-bar middle-angle"></span>
                            <span className="icon-bar last-angle"></span>
                    </button>
                </div>
            </div>
        )
    }
}

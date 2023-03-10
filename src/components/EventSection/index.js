import React from 'react'
import SectionTitle from '../SectionTitle'
import sImg1 from '../../images/event/1.jpg'
import sImg2 from '../../images/event/2.jpg'
import sImg3 from '../../images/event/3.jpg'
import LocationMap from '../Modal'

function GuestGreeting(props) {
    return <a href="https://buy.stripe.com/bIY8zO6TAdgAbyE288"> ici</a>;
  }

const Events = [
    {
        Simg: sImg1,
        title:'Houppa & Soirée',
        li1:'Jeudi 8 juin 2023',
        li2:'17h00',
        li3:'La Butte Ronde – Chemin de l’Abîme, 78125 La Boissière-École',
        li4:<LocationMap/>,
    },
    {
        Simg: sImg2,
        title:'Hébergements',
        li2:'Pour celles et ceux qui souhaitent profiter de la soirée jusqu’au bout de la nuit, le domaine de La Butte Ronde propose des hébergements sur place.',
        li5:'Toute réservation doit se faire impérativement avant le 18 mars 2023. ',
        li6: 'Pour réserver cliquez ',
        li7:<GuestGreeting/>,
    },
    {
        Simg: sImg3,
        title:'Petit déjeuner',
        li1:'Vendredi 9 juin 2023',
        li2:'A partir de 10h00 –  jusqu’à 14h00',
        li3:'Pour nos invités ayant choisi de rester dormir sur le domaine, un petit déjeuner tardif sera servi sur place le lendemain.',
        li4:'Tenue décontractée exigée pour pouvoir vous amuser (cages de foot, terrain de basket, transat...) !',
        li5:<LocationMap/>,
    },

]


const EventSection = (props) => {
    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="events">
            <div className="container">
                <SectionTitle MainTitle={'Lieux & Dates'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-img">
                                        <img src={event.Simg} alt=""/>
                                    </div>
                                    <div className="wpo-event-text">
                                        <h2>{event.title}</h2>
                                        <ul>
                                            <li>{event.li1}</li>
                                            <li>{event.li2}</li>
                                            <li>{event.li3}</li>
                                            <li>{event.li4}</li>
                                            <li>{event.li5}</li>
                                            <li>{event.li6}{event.li7}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSection;
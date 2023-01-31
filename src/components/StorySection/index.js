import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle'
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import sImg1 from '../../images/story/1.jpg'
import sImg2 from '../../images/story/2.jpg'
import sImg3 from '../../images/story/3.jpg'
import sImg4 from '../../images/story/4.jpg'

import sIcon1 from '../../images/story/1.png'
import sIcon2 from '../../images/story/2.png'
import sIcon3 from '../../images/story/3.png'
import sIcon4 from '../../images/story/4.png'


import Shape from '../../images/story/shape.jpg'


const StorySection = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }


    const Tabs = [
        {
            Id: '1',
            tabItem: 'La Houppa',
        },
        {
            Id: '2',
            tabItem: 'La Réception',
        }
    ]

    const Story = [
        {
            Id: '1',
            sImg: sImg1,
            sIcon:sIcon1,
            Shape:Shape,
            sTitle:"La Houppa",
            date:'8 juin 2023',
            description:'La Houppa (le dais nuptial) correspond à la cérémonie religieuse du mariage. Le nouveau couple est béni sous un tissu tenu de 4 piliers, généralement joliment décoré et ouvert des 4 côtés, pour s’apparenter à la tente d’Avraham Avinou. Il s’agit du symbole du foyer que le couple doit construire et partager. Il accueille les mariés ainsi que le rabbin pour la signature de la Ketouba (contrat de mariage). C’est également à cet instant que vous aurez l’occasion de voir Avner cassé le fameux verre.'
        },
        {
            Id: '2',
            sImg: sImg2,
            sIcon:sIcon2,
            Shape:Shape,
            sTitle:'La Réception',
            date:'8 juin 2023',
            description:'A l’issue de la Houppa, nous resterons sur le domaine pour célébrer notre union lors d’un cocktail et d’une soirée en musique, jusqu’au bout de la nuit. Pour les couche-tard et les fêtards, des hébergements sont disponibles à la réservation sur le domaine.'
        }
    ]



    return (

        <section className="wpo-story-section section-padding" id="story">
            <div className="container">
                <SectionTitle MainTitle={"L' événement "}/>
                <div className="row align-items-center justify-content-center">
                    <div className="row align-items-center">
                        <p>Julie et Avner seraient ravis de vous avoir à leurs côtés afin de célébrer leur mariage qui se déroulera le Jeudi 8 juin 2023 au Domaine de la Butte Ronde. </p>
                    </div>
                    <div className="col col-lg-12 col-12">
                        <div className="tab-area">
                            <div className="tablinks">
                                <Nav tabs className="service-thumbs-outer">
                                    {Tabs.map((tab, titem) => (
                                        <NavItem key={titem}>
                                            <NavLink
                                                className={`service-thumb ${classnames({ active: activeTab === tab.Id })}`}
                                                onClick={() => { toggle(tab.Id); }}
                                            >
                                                {tab.tabItem}
                                                <span className="number">{tab.tabNumber}</span>
                                            </NavLink>
                                        </NavItem>
                                    ))}
                                </Nav>
                            </div>
                            <TabContent activeTab={activeTab}>
                                {Story.map((story, Sitem) => (
                                    <TabPane tabId={story.Id} key={Sitem}>
                                        <div className="wpo-story-item">
                                            <div className="wpo-story-img">
                                                <img src={story.sImg} alt=""/>
                                            </div>
                                            <div className="wpo-story-content">
                                                <div className="wpo-story-content-inner">
                                                    <span><img src={story.sIcon} alt=""/></span>
                                                    <h2>{story.sTitle}</h2>
                                                    <span>{story.date}</span>
                                                    <p>{story.description}</p>
                                                    <div className="border-shape">
                                                        <img src={story.Shape} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                ))}
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default StorySection;
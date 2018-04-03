import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem'
import { withTracker } from 'meteor/react-meteor-data';
import { Mongo } from 'meteor/mongo';
import { Portfolios, Images } from '../api/portfolios.js'

const items = [
    {
        src: 'AUG_logo.jpg',
        description: 'Electronic health record keeping has become mandatory in the USA. Augmedix has taken advantage by introducing Google Glass to document doctor-patient interactions. Investment at seed stage at a valuation of $20 million. Latest round has valued Augmedix at $150 million.'
    },
    {
        src: 'Yoco_logo.jpg',
        description: 'A start up in South Africa, Yoco was started to turn any smartphone or tablet into a point of sale for credit card payment. Yoco has drastically changed merchant-customer interactions by simplifying the payments process. Investment made at seed stage at USD 2.2 million valuation. Exit was made 3 years later at a 4.4x return.'
    },

    { src: "Open_Bay_logo.jpg", description: "Start up based out of the east coast, Openbay aims to be the one stop shop for anyone needing solutions to their car problems. Openbay has been consistently meeting KPIs by signing with some of the top insurance companies in the country to ensure an excellent user experience." },
    { src: "Cohesity_logo.jpg", description: "One of the founders’ favourite opportunity. Led by Silicon Valley superstar Mohit Aron, founder of Nutanix a multi billion dollar company, and responsible for organizing Google’s filing system. Mohit left to start Cohesity which aims to hyper converge and drastically reduce costs for secondary storage." },
    {
        src: "bongo_logo.jpg",
        description: "South Asia’s answer to Netflix, Bongo is an on demand entertainment platform providing localized content to South Asians worldwide. They are scaling throughout Asia with a focus on local content, with plans to expand globally."
    },
    {
        src: "Artis loga.jpg",
        description: "Investments made into a fund managed by Artis Ventures. Artis are a well known San Francisco based VC that have made sizeable exits from companies such as YouTube. Fund has a mandate to invest in exciting and disruptive start ups. Stakes purchased in companies such as Palantir and Modern Meadow. Fund has already made an exit through Stemcentrx."
    },
    {
        src: "JeteChao_logo.jpg",
        description: "Jetechao is a new and up coming start up in Bangladesh that is being modeled after Ticketmaster for Bangladesh and the South Asian market. They aim to bring events to internet users in the simplest and straightforward way possible."
    },
    {
        src: "Monster_logo.jpg",
        description: "Machaao has created a cricket bot called Ganglia. Bots are a part of the AI revolution currently happening and Machaao aims to use an intelligent assistant to give relevant information and data to cricket lovers around the world, and soon to fans of other sports. The bot creates a unique experience attaching people to Ganglia and in turn presenting valuable data mining and monetization opportunities."
    },
    {
        src: "stringfy.jpg",
        description: "Stringify, an exciting Silicon Valley start up being led by a former Cisco Chief Futurist and backed by an all star team of advisers, is the most advanced app currently available in the Internet of Things space. Participation in seed round financing and a new round planned with current investment seeing a 100% increase in value."
    },
    {
        src: "Shepa_logo.jpg",
        description: "Online service with a focus on B2C and B2B. Sheba has positioned itself as the leading online marketplace for household and business services for repairing, cleaning, and maintenance services."
    },
    {
        src: "Direct_Fresh_logo.jpg",
        description: "One of Bangladesh’s most interesting and promising opportunities. The first farm to table concept, Direct Fresh leases and operates farms and livestock and aims to offer a simple and disruptive process for customers to source good food. Direct Fresh was the subject of a recent UNDP conference in New York. On sustainable farming practices."
    },
    {
        src: "Juicero_logo.jpg",
        description: "A highly publicized Silicon Valley opportunity on the brink of transforming an entire industry. With the cold press juice trend set to remain very much part of the modern human diet Juicero have developed the ‘Nespresso’ of cold press juice. Participation at seed round, recent round closed a several hundred million dollar valuation."
    }
]

class Portfoilio extends Component {
    render() {
        return (
            <div id="portfolio">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Portfolio</h2>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            {this.props.portfolioM.map((props) => {
                                return (
                                    <PortfolioItem key={props.id} id={props._id} description={props.description} src={props.photo} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTracker(() => {
    Meteor.subscribe('portfolios')
    return {
        portfolioM: Portfolios.find({}).fetch(),
    };
})(Portfoilio);
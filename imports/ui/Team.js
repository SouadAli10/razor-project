import React from 'react'
import TeamItem from './TeamItems'
const members = [
    {
        pic_name: "Ossama.jpg",
        Name: "OUSSAMA GLILAH",
        Position: "MANAGING PARTNER",
        Bio: " Born in the UAE, educated in Beirut and London, and has gone on to work in a variety of industries such as steel manufacturing, insurance, and oil and gas. Moreover Oussama is a serial tech investor in Silicon Valley and frontier market opportunities."
    },
    {
        pic_name: "Zoheb.jpg",
        Name: "ZOHEB AMIN KHAN ",
        Position: "PARTNER",
        Bio: "Educated in the UK and based in Dhaka, Zoheb currently works as a director in a private security company. It's his personal mission to grow the tech industry in Bangladesh and transform it into a leading market for investment."
    },
    {
        pic_name: "Ahad.jpg",
        Name: "AHAD MOHAMMAD BHAI",
        Position: "PARTNER",
        Bio: "Born in London and currently based in Dhaka, Ahad comes from a long line of industrialists. He loves exciting projects and has a flair for entrepreneurship. He has been involved in a variety of projects including film production, digital media, sports teams, telecom and more."
    },
    {
        pic_name: "Ramzi.jpg",
        Name: "RAMZI FARRAH",
        Position: "PARTNER",
        Bio: "Raised in the Middle East, Ramzi has more than 9 years of experience in corporate /investment banking under his belt. His experience with Lehman Brothers, Mubadala/GE Capital and Corporate Finance House grants him a solid financial background."
    },
    {
        pic_name: "Afshin_Picture.jpg",
        Name: "AFSHIN MOAYED",
        Position: "PARTNER",
        Bio: "Afshin Moayed graduated from City University of London. He co-founded an end to end recruitment startup and successfully sold it in 2017. An entrepreneur at heart, Afshin focuses on fintech and blockchain enabled ventures whilst advising founders on product and strategy. Afshin is dedicated to socio economic causes and is a committee advisor to Unity Foundation, an NGO focused on empowering communities through education."
    }
]
export default () =>
    <div id="Team">
        <div className="container">
            <div className="section-title text-center center">
                <h2>Meet Our Team</h2>
                <hr />
            </div>
            <div className="row">
                <div className="team-text team-portfolio">
                    {members.map(members => <TeamItem key={members.pic_name} {...members} />)
                    }
                </div>
            </div>
        </div>
    </div>

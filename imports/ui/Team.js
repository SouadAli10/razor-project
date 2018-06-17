import React from 'react'
import TeamItem from './TeamItems'
import Divider from "./divider.js"
const members = [
    {
        pic_name: "Ossama.png",
        Link:"https://www.linkedin.com/in/oussama-glilah-b426b7158/",
        Name: "OUSSAMA GLILAH",
        Position: "Managing Partner",
        Location:"London" ,
        Bio: "Oussama has gone on to work in a variety of industries such as steel manufacturing, insurance, oil and gas, as well as venture capital in a personal capacity leading up to Razor Capital's creation. Moreover, Oussama's entrepreneurial spirit has led him to invest in several Silicon Valley and frontier market opportunities. He has graduated with a BA (Hons) from Regent's Business School and an MSc from SOAS."
    },
    {
        pic_name: "Ahad.png",
        Link:"https://www.linkedin.com/in/ahad-bhai-9b54b586/",
        Name: "AHAD BHAI",
        Position: "Partner",
        Location:"Dhaka" ,
        Bio: "Ahad comes from a long line of industrialists. He loves exciting projects and has a flair for entrepreneurship. He has founded and been involved in a variety of projects in different sectors which include film production, digital media, sports telecom and more. Ahad has earned a BA from University of British Columbia."
    },
    {
        pic_name: "Zoheb.png",
        Link:"https://www.linkedin.com/in/zoheb-amin-khan-60835a166/",
        Name: "ZOHEB AMIN KHAN ",
        Position: "Partner",
        Location:"Dhaka" ,
        Bio: "Zoheb currently serves as a member of the board of directors of one ofthe most reputable names in the Private Security Services Industry in Bangladesh. Promoting the profile of Bangladesh from the foreign investors' perspective is what drives Zoheb to achieve his goals of transforming Bangladesh into one of the safest and most attractive emerging market economies of this greater region. Zoheb holdsa BA (Hons)from Regent's Business School."
    },
    {
        pic_name: "Ramzi.png",
        Link:"https://www.linkedin.com/in/ramzi-farah-89b08b28/",
        Name: "RAMZI FARRAH",
        Position: "Partner",
        Location:"Beirut" ,
        Bio: "Ramzi has more than 10 years of experience in corporate investment banking under his belt. His experience with Lehman Brothers, Mubadala-GE Capital and Corporate Finance House has given him a strong financial and structuring background and a sound network with the region's leading financial institutions. Ramzi graduated with a BA from the American University of Beirut and an MSc from John Hopkins University"
    },
    {
        pic_name: "Afshin_Picture.png",
        Link:"https://www.linkedin.com/in/afshinmoayedsanandajirafii/",
        Name: "AFSHIN MOAYED",
        Position: "Venture Partner",
        Location:"London" ,
        Bio: "Afshin co-founded an end to end recruitment startup and successfully sold it in 2017. An entrepreneur at heart, Afshinfocuses on fintech and blockchain enabledventures whilst advising founderson product and strategy. Afshin is dedicated to socioeconomic causes and is a committee advisor to Unity Foundation, an NGO focused on  empowering communities through education.Afshin holds a BSc (Hons)from City University of London"
    }
]
export default () =>
    <div id="Team">
        <div className="container">
            <div className="section-title text-center center">
                <h2>Meet Our Team</h2>
                <Divider />
            </div>
            <div className="row row-team">
                {members.map(members => <TeamItem key={members.pic_name} {...members} />)
                }
            </div>
        </div>
    </div>

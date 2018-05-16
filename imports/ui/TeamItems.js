import React from 'react';
import { Image } from 'semantic-ui-react'
import { Link } from 'react-scroll/modules';

const TeamItem = ({ pic_name, Link, Name, Position, Bio }) =>

    <div className="team team-portfolio">
        <Image src={"../img/" + pic_name} verticalAlign='middle' size='medium' circular />
        <div className="position-info">
            <div className="postion-name">
              <a href={Link}  target="_blank"> {Name} </a>
                <p className="position">{Position}</p>
            </div>
            <div className="team-info">
                <p>{Bio}</p>
            </div>
        </div>
    </div>

export default TeamItem
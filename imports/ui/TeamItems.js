import React from 'react';

const TeamItem = ({ pic_name, Name, Position, Bio }) =>

    <div className="team team-portfolio">
        <img src={"../img/" + pic_name} className="team-pics" />
        <div className="position-info">
            <div className="postion-name">
                <p >{Name}</p>
                <p className="position">{Position}</p>
            </div>
            <div className="team-info">
                <p>{Bio}</p>
            </div>
        </div>
    </div>

export default TeamItem
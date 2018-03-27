import React from 'react';

const TeamItem = ({ pic_name, Name, Position, Bio }) =>

    <div className="team team-portfolio">
        <div >
            <img src={"../img/" + pic_name} className="team-pics" />
        </div>
        <div>
            <p>{Name}<br />{Position}</p>
        </div>
        <div>
            <p>{Bio}</p>
        </div>
    </div>

export default TeamItem
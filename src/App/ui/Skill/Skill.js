import React from 'react';
import PropTypes from 'prop-types';
import style from './Skill.scss';

const Skill = (props) => {

    const colors = {
        blue: '#65DEF1',
        green: '#A8DCD1',
        gray: '#DCE2C8',
        orange: '#F96900',
        brown: '#F17F29'
    }
    let skillColor= '';

    switch(props.domain) {
        case 'FE':
            skillColor = colors.blue;
            break;
        case 'BE':
            skillColor = colors.gray;
            break;
        case 'tools':
            skillColor = colors.green;
            break;
        case 'other':
            skillColor = colors.brown
            break;
        default:
            skillColor = colors.orange;
            break;
        }

    return (
        <div className={style.skill} style={{backgroundColor: skillColor}}>
            {props.name}
        </div>
    )
}

Skill.Proptypes = {
    name: PropTypes.string,
    domain: PropTypes.number
}

export default Skill;
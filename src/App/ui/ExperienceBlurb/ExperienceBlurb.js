import React from 'react';
import style from './ExperienceBlurb.scss'
import PropTypes from 'prop-types';



const experienceBlurb = (props) => {

    const extraInfo = (
        <div className={style.extraContainer}>
            <p className={style.extraTitle}>Recent activity</p>
            <span className={style.extraDate}>Commit date: </span><span className={style.extraDate}>{props.extraInfoDate}</span>
            <p className={style.extraDescription}>{props.extraInfo}</p>
        </div>
    );

    return (
        <div className={style.container}>
            <img className={style.image} src={props.image} />
            <div className={style.textContainer}>
                <p className={style.title}>{props.title}</p>
                <p className={style.description}>{props.description}</p>
                {props.extraInfo ? extraInfo : null }
                <a target='_blank' className={style.url} href={props.url}>{props.urlName}</a>
            </div>
        </div>
    )
}
experienceBlurb.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    urlName: PropTypes.string,
    extraInfo: PropTypes.string,
    extraInfoDate: PropTypes.string
}


export default experienceBlurb;
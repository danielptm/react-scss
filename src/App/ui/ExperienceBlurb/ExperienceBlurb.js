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
                <div>{props.url2 ? <a className={style.url} target='_blank' href={props.url2} >{props.url2Name}</a> : null}</div>
                <div>{props.extraInfo ? extraInfo : null }</div>
                <div><a target='_blank' className={style.url} href={props.url}>{props.urlName}</a></div>
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
    extraInfoDate: PropTypes.string,
    url2: PropTypes.string,
    url2Name: PropTypes.string
}


export default experienceBlurb;
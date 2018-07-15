import React from 'react';
import style from './ExperienceBlurb.scss'

const experienceBlurb = (props) => {
    return (
        <div className={style.container}>
            <img className={style.image} src={props.image} />
            <div className={style.textContainer}>
                <p className={style.title}>{props.title}</p>
                <p className={style.description}>{props.description}</p>
                <a target='_blank' className={style.url} href={props.url}>Company site</a>
            </div>
        </div>
    )
}

export default experienceBlurb;
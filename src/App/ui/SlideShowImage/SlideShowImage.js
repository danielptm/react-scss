import React from 'react';
import style from './SlideShowImage.scss';
import image from '../../../assets/daniel2.png';
import PropTypes from 'prop-types';

const SlideShowImage = (props) => {
    let cardStyle = style.cardContainer + ' ';
    switch(props.size) {
        case 'small':
            cardStyle += style.smallSlideShowImageContainer;
            break;
        case 'medium':
            cardStyle += style.mediumSlideShowImageContainer;
            break;
        case 'large':
            cardStyle += style.largeSlideShowImageContainer;
            break;
        default:
            cardStyle += style.largeSlideShowImageContainer;
            break;
    }
    return (
        <div className={style.animationContainer}>
            <div className={cardStyle}>
                <img className={style.image} src={image} />
                <div className={style.cardFooter}>
                    {props.caption}
                </div>
            </div>
        </div>
    );
}

SlideShowImage.propTypes = {
    size: PropTypes.string,
    caption: PropTypes.string
};

export default SlideShowImage;
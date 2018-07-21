import React from 'react';
import style from './ImageSlideShow.scss';

class ImageSlideShow extends React.Component {
    render() {
        return(
            <div className={style.imageSlideShowContainer}>
                <div className={style.innerContainer}>
                A slide show will be available here soon!
                </div>
            </div>
        )
    }
}

export default ImageSlideShow;
import React from 'react';
import style from './ImageSlideShow.scss';
import SlideShowImage from '../../ui/SlideShowImage/SlideShowImage';

class ImageSlideShow extends React.Component {
    render() {
        return(
            <div className={style.imageSlideShowContainer}>
                <div className={style.column}>
                    <SlideShowImage
                        size={'medium'}
                        caption={'This is a picture of me at the DDND summer party.'}
                    />
                </div>
                <div >

                </div>
                <div >

                </div>
                <div >

                </div>
            </div>
        )
    }
}

export default ImageSlideShow;